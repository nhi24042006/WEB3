const firebaseConfig = {
    apiKey: "AIzaSyAkFh56giHnJ6lgxOWSniwnrpSVQMIHJqM",
    authDomain: "vlu-ticket-web3.firebaseapp.com",
    databaseURL: "https://vlu-ticket-web3-default-rtdb.firebaseio.com", // Dòng quan trọng nhất tui vừa thêm vào đây!
    projectId: "vlu-ticket-web3",
    storageBucket: "vlu-ticket-web3.firebasestorage.app",
    messagingSenderId: "709823671588",
    appId: "1:709823671588:web:e5c52176e322ab114b17b1"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 1. Địa chỉ trên mạng Sepolia
const contractAddress = "0x5a79019A273819757Dbc756C01fD4B4d7842Acd7";

// 2. ABI
const contractABI = [
    {
        "inputs": [
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
        "inputs": [
            { "internalType": "address", "name": "sender", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
            { "internalType": "address", "name": "owner", "type": "address" }
        ],
        "name": "ERC721IncorrectOwner", "type": "error"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "operator", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "ERC721InsufficientApproval", "type": "error"
    },
    {
        "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ],
        "name": "ERC721InvalidApprover", "type": "error"
    },
    {
        "inputs": [ { "internalType": "address", "name": "operator", "type": "address" } ],
        "name": "ERC721InvalidOperator", "type": "error"
    },
    {
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ],
        "name": "ERC721InvalidOwner", "type": "error"
    },
    {
        "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ],
        "name": "ERC721InvalidReceiver", "type": "error"
    },
    {
        "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ],
        "name": "ERC721InvalidSender", "type": "error"
    },
    {
        "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ],
        "name": "ERC721NonexistentToken", "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
            { "indexed": true, "internalType": "address", "name": "approved", "type": "address" },
            { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "Approval", "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
            { "indexed": true, "internalType": "address", "name": "operator", "type": "address" },
            { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }
        ],
        "name": "ApprovalForAll", "type": "event"
    },
    {
        "inputs": [ { "internalType": "address", "name": "studentAddress", "type": "address" } ],
        "name": "mintTicket", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
            { "internalType": "bytes", "name": "data", "type": "bytes" }
        ],
        "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "operator", "type": "address" },
            { "internalType": "bool", "name": "approved", "type": "bool" }
        ],
        "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
            { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
            { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "Transfer", "type": "event"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "address", "name": "to", "type": "address" },
            { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
        ],
        "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    },
    {
        "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ],
        "name": "balanceOf",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ],
        "name": "getApproved",
        "outputs": [ { "internalType": "address", "name": "", "type": "address" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "owner", "type": "address" },
            { "internalType": "address", "name": "operator", "type": "address" }
        ],
        "name": "isApprovedForAll",
        "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [], "name": "name",
        "outputs": [ { "internalType": "string", "name": "", "type": "string" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [], "name": "nextTokenId",
        "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ],
        "name": "ownerOf",
        "outputs": [ { "internalType": "address", "name": "", "type": "address" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ],
        "name": "supportsInterface",
        "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [], "name": "symbol",
        "outputs": [ { "internalType": "string", "name": "", "type": "string" } ],
        "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ],
        "name": "tokenURI",
        "outputs": [ { "internalType": "string", "name": "", "type": "string" } ],
        "stateMutability": "view", "type": "function"
    }
];

let signer;

// Hàm kiểm tra và chuyển mạng Sepolia
async function checkAndSwitchNetwork() {
    const sepoliaChainId = '0xaa36a7';
    const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });

    if (currentChainId !== sepoliaChainId) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: sepoliaChainId }],
            });
            console.log("Đã tự động đổi sang mạng Sepolia!");
        } catch (error) {
            console.error("Không thể đổi mạng:", error);
            alert("Vui lòng mở MetaMask và đổi sang mạng Sepolia thủ công nhé!");
            return false;
        }
    }
    return true;
}

// Hàm kết nối ví MetaMask
async function connectWallet() {
    if (window.ethereum) {
        try {
            const isCorrectNetwork = await checkAndSwitchNetwork();
            if (!isCorrectNetwork) return;

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            const address = await signer.getAddress();

            document.getElementById("connectBtn").innerText = `Đã kết nối`;

        } catch (error) {
            console.error("Lỗi kết nối ví:", error);
        }
    } else {
        alert("Vui lòng cài đặt tiện ích MetaMask trên trình duyệt!");
    }
}

// Hàm nhận vé NFT
async function buyTicket() {
    if (!signer) {
        alert("Vui lòng kết nối ví MetaMask trước khi nhận vé!");
        return;
    }

    const hoTen = document.getElementById("hoTen") ? document.getElementById("hoTen").value.trim() : "";
    const mssv = document.getElementById("mssv") ? document.getElementById("mssv").value.trim() : "";

    if (hoTen === "" || mssv === "") {
        alert("Vui lòng nhập đầy đủ Họ Tên và MSSV");
        return;
    }

    const buyBtn = document.getElementById("buyBtn");

    try {
        const isCorrectNetwork = await checkAndSwitchNetwork();
        if (!isCorrectNetwork) return;

        buyBtn.innerText = "Vui lòng chờ";
        buyBtn.disabled = true;
        buyBtn.style.backgroundColor = "gray";
        buyBtn.style.cursor = "not-allowed";

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const userAddress = await signer.getAddress();
        const tx = await contract.mintTicket(userAddress);

        await tx.wait();

        const ticketData = {
            ten: hoTen,
            mssv: mssv,
            vi: userAddress,
            txHash: tx.hash,
            thoiGian: new Date().toLocaleString()
        };
        database.ref('danhSachVe').push(ticketData);

        // Thêm tích hợp mã QR động
        const qrContent = `https://sepolia.etherscan.io/tx/${tx.hash}`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrContent)}`;

        const qrImgElement = document.getElementById("qrImage");
        if (qrImgElement) {
            qrImgElement.src = qrUrl;
        } else {
            console.error("Không tìm thấy thẻ <img id='qrImage'> trong HTML để hiển thị QR!");
        }

        // In mã Hash ra màn hình dưới tấm vé
        const hashTextElement = document.getElementById("hashText");
        if (hashTextElement) {
            hashTextElement.innerText = `Mã giao dịch: ${tx.hash}`;
        }

        document.getElementById("ticketArea").style.display = "block";
        buyBtn.innerText = "ĐÃ SỞ HỮU VÉ";
        buyBtn.style.backgroundColor = "#4CAF50";
        buyBtn.style.cursor = "default";

        document.getElementById("ticketArea").scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error("Lỗi giao dịch:", error);
        alert("Giao dịch thất bại!");

        buyBtn.innerText = "MUA VÉ NGAY";
        buyBtn.disabled = false;
        buyBtn.style.backgroundColor = "#4CAF50";
        buyBtn.style.cursor = "pointer";
    }
}