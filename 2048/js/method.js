/**
 * 变量定义及其初始化
 * @param arr 与2048对应的二维数组
 * @param floatBlcok 浮动模块所在div 
 */
var arr = new Array();
var floatBlcok = document.getElementById("floatBlock");
for(var i = 0; i < 4; i++)
{
    arr[i] = [0, 0, 0, 0];
}

/**
 * function 
 */
//随机生成新块的位置
function newBlock()
{
    //随机生成
    var ranNumber = Math.ceil(Math.random() * 9);
    var i = Math.floor(ranNumber / 3);
    var j = ranNumber % 3;
    //arr标记
    if(arr[i][j] == 0)
    {
        arr[i][j] = 2;
    }
    else
    {
        for(var ii = 0; ii < 4; ii++)
        {
            var iflag = false;
            for(var jj = 0; jj < 4; jj++)
            {
                if(arr[ii][jj] == 0)
                {
                    arr[ii][jj] = 2;
                    i = ii;
                    j = jj;
                    iflag = true;
                    break;
                }
            }
            if(iflag)
            {
                break;
            }
        }
    }
    console.log(i + ":" + j + "=" + arr[i][j]);
    //网页上画出来
    paintingBlock(i, j, 2);
}

function blockDivString(number)
{
    if(number == 2)
    {
        return "<div class = 'blockCell twoBackground'>" + number + "</div>";
    }
    else if(number == 4)
    {
        return "<div class = 'blockCell fourBackground'>" + number + "</div>";
    }
    else if(number == 8)
    {
        return "<div class = 'blockCell eightBackground'>" + number + "</div>";
    }
    else if(number == 16)
    {
        return "<div class = 'blockCell sixtheenBackground'>" + number + "</div>";
    }
    else if(number == 32)
    {
        return "<div class = 'blockCell thirtytwoBackground'>" + number + "</div>";
    }
    else if(number == 64)
    {
        return "<div class = 'blockCell sixtyfourBackground'>" + number + "</div>";
    }
    else if(number == 128)
    {
        return "<div class = 'blockCell OHtwentyeightBackground'>" + number + "</div>";
    }
    else if(number == 256)
    {
        return "<div class = 'blockCell THfiftysixBackground'>" + number + "</div>";
    }
    else if(number == 512)
    {
        return "<div class = 'blockCell FHtwelveBackground'>" + number + "</div>";
    }
    else if(number == 1024)
    {
        return "<div class = 'blockCell TenHtwentyeightBackground'>" + number + "</div>";
    }
    else
    {
        return "<div class = 'blockCell twentyHfortyeight'>" + number + "</div>";
    }
}

function paintingBlock(i, j, number)
{
    var idBlockString = "block-" + i + "-" + j;
    var blockDiv = document.getElementById(idBlockString);
    blockDiv.innerHTML = blockDivString(number);
}

//var lock=false;
//从一个位置横向右移动到另一个位置
function RightMover(odiv, itarget)
{
    var timer = null;
    var speed = 0;
    timer = self.setInterval(function(){
        if(odiv.offsetLeft == itarget)
        {
            odiv.style.display = "none";
            timer = window.clearInterval(timer);
        }
        if(odiv.offsetLeft + 10 < itarget)
        {
            speed = 10;
            odiv.style.left = odiv.offsetLeft + speed + 'px';
        }
        else
        {
            speed = itarget - odiv.offsetLeft;
            odiv.style.left = odiv.offsetLeft + speed + 'px';
        }
    },4);
}

//从一个位置横向右移动到另一个位置
function DownMover(odiv, itarget)
{
    var timer = null;
    var speed = 0;
    timer = self.setInterval(function(){
        if(odiv.offsetTop == itarget)
        {
            odiv.style.display="none";
            timer = window.clearInterval(timer);
        }
        if(odiv.offsetTop + 10 < itarget)
        {
            speed = 10;
            odiv.style.top = odiv.offsetTop + speed + 'px';
        }
        else
        {
            speed = itarget - odiv.offsetTop;
            odiv.style.top = odiv.offsetTop + speed + 'px';
        }
    },4);
}

//从一个位置横向左移动到另一个位置
function LeftMover(odiv, itarget)
{
    var timer = null;
    var speed = 0;
    timer = self.setInterval(function(){
        if(odiv.offsetLeft == itarget)
        {
            odiv.style.display = "none";
            timer = window.clearInterval(timer);
        }
        if(odiv.offsetLeft - 10 > itarget)
        {
            speed = -10;
            odiv.style.left = odiv.offsetLeft + speed + 'px';
        }
        else
        {
            speed = itarget - odiv.offsetLeft;
            odiv.style.left = odiv.offsetLeft + speed + 'px';
        }
    },4);
}

function UpMover(odiv, itarget)
{
    var timer = null;
    var speed = 0;
    timer = self.setInterval(function(){
        if(odiv.offsetTop == itarget)
        {
            odiv.style.display = "none";
            timer = window.clearInterval(timer);
        }
        if(odiv.offsetTop - 10 > itarget)
        {
            speed = -10;
            odiv.style.top = odiv.offsetTop + speed + 'px';
        }
        else
        {
            speed = itarget - odiv.offsetTop;
            odiv.style.top = odiv.offsetTop + speed + 'px';
        }
    },4);
}

function createFloatBlock(topNumber, leftNumber, animationString, number)
{
    var floatBlcok = document.getElementById(animationString);
    floatBlcok.style.position = "absolute";
    floatBlcok.style.top = topNumber + "px";
    floatBlcok.style.left = leftNumber + "px";
    floatBlcok.innerText = 2;
    floatBlock.style.color = "#776E65";
    floatBlcok.style.fontSize = "68px";
    floatBlcok.style.fontWeight = "bold";
    floatBlcok.style.textAlign = "center";
    floatBlcok.style.lineHeight = "130px";
    floatBlcok.style.display = "block";
    if(number == 2)
    {
        floatBlcok.style.backgroundColor = "#EEE4DA";
    }
    else if(number == 4)
    {
        floatBlcok.style.backgroundColor = "#EDE0C8";
    }
    else if(number == 8)
    {
        floatBlcok.style.backgroundColor = "#F2B179";
    }
    else if(number == 16)
    {
        floatBlcok.style.backgroundColor = "#F59563";
    }
    else if(number == 32)
    {
        floatBlcok.style.backgroundColor = "#F67C5F";
    }
    else if(number == 64)
    {
        floatBlcok.style.backgroundColor = "#F65E3B";
    }
    else if(number == 128)
    {
        floatBlcok.style.backgroundColor = "#EDCF72";
    }
    else if(number == 256)
    {
        floatBlcok.style.backgroundColor = "#EDCC61";
    }
    else if(number == 512)
    {
        floatBlcok.style.backgroundColor = "#EDC850";
    }
    else if(number == 1024)
    {
        floatBlcok.style.backgroundColor = "#EDC53F";
        floatBlcok.style.fontSize = "46px";
    }
    else
    {
        floatBlcok.style.fontSize = "46px";
        floatBlcok.style.backgroundColor = "#EDC22E";
    }
}

function move(i, j, number, toi, toj, tonumber)
{
    if(i == toi&&j == toj)
    {
        return;
    }
    //找到当前块的位置
    var tmpString = "block-" + i + "-" + j;
    var originDiv = document.getElementById(tmpString);
    originDiv.innerHTML="";
    //找到目标位置
    tmpString = "block-" + toi + "-" + toj;
    var targetDiv = document.getElementById(tmpString);
    var moveDiv;
    //横着移动
    if(i == toi)
    {
        //向右
        if(j < toj)
        {
            tmpString = "animation-"+ i + "-" + j;
            createFloatBlock(originDiv.offsetTop, originDiv.offsetLeft, tmpString, number);
            moveDiv = document.getElementById(tmpString);
            RightMover(moveDiv, targetDiv.offsetLeft);
        }
        //向左移动
        else
        {
            tmpString = "animation-"+ i + "-" + j;
            createFloatBlock(originDiv.offsetTop, originDiv.offsetLeft, tmpString, number);
            moveDiv = document.getElementById(tmpString);
            LeftMover(moveDiv, targetDiv.offsetLeft);
        }
    }
    else
    {
        if(i < toi)
        {
            tmpString = "animation-"+ i + "-" + j;
            createFloatBlock(originDiv.offsetTop, originDiv.offsetLeft, tmpString,number);
            moveDiv = document.getElementById(tmpString);
            DownMover(moveDiv,targetDiv.offsetTop);
        }
        else
        {
            tmpString = "animation-"+ i + "-" + j;
            createFloatBlock(originDiv.offsetTop, originDiv.offsetLeft, tmpString, number);
            moveDiv = document.getElementById(tmpString);
            UpMover(moveDiv, targetDiv.offsetTop); 
        }
    }
    setTimeout(function(){ paintingBlock(toi, toj, tonumber); }, 150);
    
    
}
