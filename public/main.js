let n = 1;
getPage.onclick = () => {
    console.log('12345')
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    };
    request.send()
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('request.response')
                console.log(request.response)
                const html = document.createElement('html')
                html.innerHTML = request.response;
                document.body.appendChild(html);
            } else {
                alert('加载HTML失败')
            }
        }
    };
    request.send();
};


getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('request.response')
                console.log(request.response)
                const script = document.createElement('script')
                script.innerHTML = request.response;
                document.body.appendChild(script);
            } else {
                alert('加载JS失败了')
            }
        }
    };
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('request.response')
                console.log(request.response)
                const style = document.createElement('style')
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert('加载CSS失败了')
            }
        }
    };
    request.send();
}