/**
 * Created by jf on 2016/5/4.
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

function my$(id){
    return document.getElementById(id);
}

function setInnerText(element, content) {
    //能力检测
    if(typeof element.innerText === "string"){
        element.innerText = content;
    }else{
        element.textContent = content;
    }
}

//获取标签之间的内容  兼容浏览器
function getInnerText(element) {
    if(typeof element.innerText === "string"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}
