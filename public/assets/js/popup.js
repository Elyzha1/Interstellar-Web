let inFrame;
try {
    inFrame = window !== top;
} catch (e) {
    inFrame = true;
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = window.open("", "", "width=1000,height=600");
    if (!popup || popup.closed) {
        alert("Thank you for using Interstellar | by Elyzha");
    } else {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");

        doc.title = "Interstellar";
        link.rel = "icon";
        link.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        iframe.src = location.href;
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        location.replace("https://google.com");
    }
}
