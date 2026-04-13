### 🎟️ VLU Live Concert - Web3 NFT Ticketing System
Dự án ứng dụng công nghệ Blockchain để giải quyết triệt để vấn đề vé giả và phe vé trong các sự kiện đại nhạc hội của Đại học Văn Lang. Hệ thống cho phép sinh viên đúc (mint) vé dưới dạng NFT (chuẩn ERC-721), đảm bảo tính độc bản, minh bạch và không thể làm giả.

### 🏗️ Kiến trúc hệ thống
Dự án được thiết kế để tối ưu hóa giữa tính bảo mật của Blockchain và trải nghiệm người dùng thân thiện:

- Blockchain Layer: Sử dụng ngôn ngữ Solidity để lập trình Smart Contract, triển khai thực tế trên mạng thử nghiệm Ethereum Sepolia.

- Web3 Bridge: Tích hợp thư viện Ethers.js làm cầu nối giữa trình duyệt và ví MetaMask, thực hiện ký giao dịch và tương tác dữ liệu on-chain.

- Frontend: Giao diện HTML/CSS/JS thuần, triển khai trên hạ tầng Azure Static Web, sử dụng CSS định vị tuyệt đối để tích hợp Mã QR động đè trực tiếp lên phôi vé.

- Data Management: Áp dụng giải pháp Lưu trữ lai (Hybrid Storage) kết hợp Blockchain và Firebase Realtime Database. Thông tin cá nhân (Tên, MSSV) được lưu trữ an toàn trên Firebase để phục vụ quản lý thời gian thực, trong khi bằng chứng sở hữu được ghi nhận vĩnh viễn trên Blockchain.

### 📝 Thông tin Smart Contract
Tên NFT: Van Lang Live Concert

Chuẩn Token: ERC-721

Mạng lưới: Sepolia Testnet

Contract Address: 0x5a79019A273819757Dbc756C01fD4B4d7842Acd7

### 🚀 Tính năng chính
- Kết nối ví: Tích hợp MetaMask để xác thực danh tính Web3 nhanh chóng.

- Đúc vé NFT: Mỗi sinh viên sở hữu vé thông qua việc xác nhận giao dịch đúc token trực tiếp trên Blockchain.

- Mã QR Xác thực: Tự động tạo mã QR chứa liên kết tra cứu giao dịch (TxHash) trên Etherscan, giúp Ban tổ chức kiểm soát vé thật/giả tức thì.

- Hiển thị Real-time: Giao diện phản hồi ngay lập tức, hiển thị phôi vé cá nhân hóa sau khi mạng lưới xác nhận giao dịch thành công.

- Quản trị (Admin) Real-time: Dashboard chuyên dụng sử dụng Firebase Realtime Database giúp Ban tổ chức theo dõi danh sách sinh viên đã nhận vé theo thời gian thực từ bất kỳ thiết bị nào.

### 💻 Hướng dẫn khởi chạy
🌐 Trải nghiệm trực tiếp tại: https://vluticketweb3.z23.web.core.windows.net/

Chuẩn bị: Cài đặt tiện ích MetaMask trên trình duyệt và nhận ETH thử nghiệm tại các trang Sepolia Faucet.

Thao tác mua vé:

- Bấm "Kết nối ví MetaMask".

- Nhập đầy đủ Họ tên và MSSV vào form định danh.

- Bấm "MUA VÉ NGAY" và xác nhận giao dịch trên pop-up của ví MetaMask.

- Chờ giao dịch hoàn tất để nhận vé có kèm mã QR xác thực và mã TxHash.

### 👨‍💻 Tác giả

Phạm Thị Nhi

MSSV: 2474802010285

Lớp: 71K30CNTT07 - Khoa Công nghệ Thông tin

Trường: Đại học Văn Lang

-------

Lê Huỳnh Yến Nhi

MSSV: 2474802010282

Lớp: 71K30CNTT07 - Khoa Công nghệ Thông tin

Trường: Đại học Văn Lang
