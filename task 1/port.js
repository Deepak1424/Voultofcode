function download() {
    const link = document.createElement('a');
    link.href = 'req/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
