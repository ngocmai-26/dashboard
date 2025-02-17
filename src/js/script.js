function showIframe(id) {
    closeModalIraModal();
    closeModalAIDTIModal();

    // Ẩn trang chủ và hiển thị iframe container
    document.getElementById('container').style.display = 'none';
    document.getElementById('iframeContainer').style.display = 'block';

    function updateIframe() {
        // Xác định loại màn hình (Web hoặc Mobile)
        const screenType = window.innerWidth <= 768 ? "mobile" : "web"; 

        // Tạo ID tương ứng với loại màn hình
        const iframeId = `${id}-${screenType}`;

        // Ẩn tất cả iframe trước khi hiển thị cái đúng
        document.querySelectorAll("iframe").forEach(iframe => iframe.style.display = "none");

        // Hiển thị iframe phù hợp
        const selectedIframe = document.getElementById(iframeId);
        if (selectedIframe) {
            selectedIframe.style.display = "block";

            // Nếu iframe chưa có src, thì mới gán để tránh load trước
            if (!selectedIframe.src) {
                selectedIframe.src = selectedIframe.getAttribute("data-src");
            }
        }
    }

    // Gọi ngay lần đầu để hiển thị đúng iframe
    updateIframe();

    // Lắng nghe sự kiện thay đổi kích thước màn hình và cập nhật iframe
    window.addEventListener("resize", updateIframe);

    // Hiển thị nút quay về
    document.getElementById('backButton').style.display = 'flex';
}

function goHome() {
    // Quay về trang chủ
    document.querySelectorAll("iframe").forEach(iframe => iframe.style.display = "none");

    document.getElementById('container').style.display = 'block';
    document.getElementById('iframeContainer').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
}

// Khi cuộn trang, cập nhật vị trí nút "Quay lại"
window.onscroll = function () {
    document.getElementById('backButton').style.bottom = (window.scrollY + 20) + 'px';
};

// Xử lý Modal
function openModalIraModal() {
    document.getElementById('iraModal').style.display = 'block';
    document.getElementById('AIDTIModal').style.display = 'none';
}

function closeModalIraModal() {
    document.getElementById('iraModal').style.display = 'none';
}

function openModalAIDTIModal() {
    document.getElementById('AIDTIModal').style.display = 'block';
}

function closeModalAIDTIModal() {
    document.getElementById('AIDTIModal').style.display = 'none';
}
