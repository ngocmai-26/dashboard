function showIframe(id) {
    
    closeModal();
    // Ẩn trang chủ và hiển thị iframe tương ứng
    document.getElementById('container').style.display = 'none';
    document.getElementById('iframeContainer').style.display = 'block';

    // Ẩn tất cả các iframe trước
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => iframe.style.display = 'none');

    // Hiển thị iframe được chọn
    document.getElementById(id).style.display = 'block';
    document.getElementById('backButton').style.display = 'flex'; // Hiển thị nút quay về
}

function goHome() {
    // Quay về trang chủ
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => iframe.style.display = 'none'); // Ẩn tất cả các iframe
    document.getElementById('container').style.display = 'block'; // Hiển thị trang chủ
    document.getElementById('iframeContainer').style.display = 'none'; // Ẩn container iframe
    document.getElementById('backButton').style.display = 'none'; // Ẩn nút quay về
}

window.onscroll = function () {
    const backButton = document.getElementById('backButton');
    backButton.style.top = (window.scrollY + 20) + 'px'; // Cập nhật vị trí Y dựa trên vị trí cuộn
};

function openModal() {
    document.getElementById('iraModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('iraModal').style.display = 'none';
}
