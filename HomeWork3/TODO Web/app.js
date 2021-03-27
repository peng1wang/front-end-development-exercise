var input = document.querySelector('input');
var hl = document.querySelector('ul');

function submit(){
    if(input.value !=''){
        var li = document.createElement('li');
        li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${input.value}</label>`;
        hl.appendChild(li);
        //指定控件为'显示(展开)'状态
        document.querySelector('.tasksBoard').style.display = 'block';
    }
    input.value = '';
}

document.querySelector('form').addEventListener('submit',submit);
document.getElementsByTagName('form')[0].setAttribute('onsubmit', 'return false')

document.getElementById('clear').addEventListener('click',clearall);
function clearall(f){
    var hl = document.querySelector('ul').innerHTML = '';
    document.querySelector('.tasksBoard').style.display = 'none';
}

document.querySelector('ul').addEventListener('click',TODO);
function TODO(f){
    if(f.target.className == 'delete'){
        f.target.parentNode.remove();
        f.target.remove();
        let lis = document.getElementsByTagName('li'); //local
        if (lis.length===0){
            clearall();
        }

    }
    else {
        //因为上文没加，利用nextSibling处理旁边
        const task = f.target.nextSibling;
        if(e.target.checked){
            // CSS
            task.style.textDecoration = "line-through";
            task.style.color = "#2BD5B3";
        }
        else {
            //调回来
            task.style.textDecoration = "none";
            task.style.color = "#2BD5B3";
        }
    }
}