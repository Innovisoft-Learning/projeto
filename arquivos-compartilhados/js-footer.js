fetch('arquivos-compartilhados/footer.html')
.then(response => response.text())
.then(content => {
    const headerPlaceholder = document.getElementById('footer-placeholder');
    headerPlaceholder.innerHTML = content;
});