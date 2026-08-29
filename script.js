// Kiểm tra xem người dùng đã đăng nhập từ trước chưa khi tải trang
window.onload = function() {
    const savedUser = localStorage.getItem("robloxUser");
    if (savedUser) {
        showDashboard(savedUser);
    }
}

function loginWithRoblox() {
    const usernameInput = document.getElementById('roblox-username').value.trim();
    const messageEl = document.getElementById('message');

    // Kiểm tra xem ô nhập có trống không
    if (usernameInput === "") {
        messageEl.style.color = "red";
        messageEl.innerText = "Vui lòng nhập Username Roblox!";
        return;
    }

    // Mô phỏng quá trình tải
    messageEl.style.color = "blue";
    messageEl.innerText = "Đang kiểm tra...";

    setTimeout(() => {
        // Lưu tên người dùng vào Local Storage của trình duyệt
        localStorage.setItem("robloxUser", usernameInput);
        
        // Chuyển sang màn hình chào mừng
        showDashboard(usernameInput);
    }, 1000); // Đợi 1 giây để tạo cảm giác chân thực
}

function showDashboard(username) {
    document.getElementById('login-section').style.display = "none";
    document.getElementById('dashboard-section').style.display = "block";
    document.getElementById('welcome-text').innerText = "Chào mừng, " + username + "!";
}

function logout() {
    // Xóa dữ liệu đăng nhập và quay lại form
    localStorage.removeItem("robloxUser");
    document.getElementById('roblox-username').value = "";
    document.getElementById('message').innerText = "";
    document.getElementById('login-section').style.display = "block";
    document.getElementById('dashboard-section').style.display = "none";
}
