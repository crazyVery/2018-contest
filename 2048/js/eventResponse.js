/**
 * 键盘按下消息的响应函数
 * ←：37
 * ↑：38
 * →：39
 * ↓：40
 */
var achievementScore = 0;
function keyRightDown()
{
    var im = false;
    for(var i = 0; i < 4; i++)
    {
        var j = 3;
        var q = -1;       //指向最右的元素
        var iflag = false;
        //找到最右的元素
        for(j = 3; j >= 0; j--)
        {
            if(arr[i][j] != 0)
            {
                //滑动
                arr[i][3] = arr[i][j];
                if(j != 3)
                {
                    arr[i][j] = 0;
                    im = true;  
                }
                q = 3; 
                //滑动的展示
                move(i, j, arr[i][3], i, 3, arr[i][3]);           
                break;
            }
        }
        //此行不需要移动
        if(q == -1)
        {
            continue;
        }
        for(j--; j >= 0; j--)
        {
            if(arr[i][j] != 0)
            {
                if((arr[i][j] == arr[i][q]) && (!iflag))
                {
                    //融合
                    var ii = arr[i][j];
                    arr[i][q] = arr[i][j] + arr[i][q];
                    arr[i][j] = 0;
                    move(i, j, ii, i, q, arr[i][q]);
                    achievementScore=achievementScore+arr[i][q];
                    document.getElementById("achievementScore").innerText = achievementScore;
                    blockNumber--;
                    if(arr[i][q] == 2048)
                    {
                        setTimeout(function()
                        {
                            alert("恭喜！通关！！！");
                            location.reload();
                        }, 250);
                    }
                    im = true;
                    iflag = true;
                }
                else
                {
                    //向空行移动
                    arr[i][q-1] = arr[i][j];
                    if(j != (q-1))
                    {
                        arr[i][j] = 0;
                        im = true;
                    }
                    move(i, j, arr[i][q-1], i, q-1, arr[i][q-1]); 
                    q = q-1;
                    iflag = false;
                }

            }
        }
        
    }
    return im;

}

function keyDownDown()
{
    var im = false;
    for(var j = 0; j < 4; j++)
    {
        var i = 3;
        var q = -1;       //指向最右的元素
        var iflag = false;
        //找到最右的元素
        for(i = 3; i >= 0; i--)
        {
            if(arr[i][j] != 0)
            {
                //滑动
                arr[3][j] = arr[i][j];
                if(i != 3)
                {
                    arr[i][j] = 0;
                    im = true; 
                }
                q = 3; 
                //滑动的展示
                move(i, j, arr[3][j], 3, j, arr[3][j]);            
                break;
            }
        }
        //此行不需要移动
        if(q == -1)
        {
            continue;
        }
        for(i--; i >= 0; i--)
        {
            if(arr[i][j] != 0)
            {
                if((arr[i][j] == arr[q][j]) && (!iflag))
                {
                    //融合
                    var ii = arr[i][j];
                    arr[q][j] = arr[i][j] + arr[q][j];
                    arr[i][j] = 0;
                    move(i, j, ii, q, j, arr[q][j]);
                    achievementScore=achievementScore + arr[q][j];
                    document.getElementById("achievementScore").innerText = achievementScore;
                    blockNumber--;
                    if(arr[q][j] == 2048)
                    {
                        setTimeout(function()
                        {
                            alert("恭喜！通关！！！");
                            location.reload();
                        }, 250);
                    }
                    im = true;
                    iflag = true;
                }
                else
                {
                    //向空行移动
                    arr[q-1][j] = arr[i][j];
                    if(i != (q-1))
                    {
                        arr[i][j] = 0;
                        im = true;
                    }
                    move(i, j, arr[q-1][j], q-1, j, arr[q-1][j]); 
                    q = q-1;
                    iflag = false;
                }

            }
        }
        
    }
    return im;

}

function keyLeftDown()
{
    var im = false;
    for(var i = 0; i < 4; i++)
    {
        var j = 0;
        var q = -1;       //指向最右的元素
        var iflag = false;
        //找到最右的元素
        for(j = 0; j < 4; j++)
        {
            if(arr[i][j] != 0)
            {
                //滑动
                arr[i][0] = arr[i][j];
                if(j != 0)
                {
                    arr[i][j] = 0;
                    im = true; 
                }
                q = 0; 
                //滑动的展示
                move(i, j, arr[i][0], i, 0, arr[i][0]);            
                break;
            }
        }
        //此行不需要移动
        if(q == -1)
        {
            continue;
        }
        for(j++; j < 4; j++)
        {
            if(arr[i][j] != 0)
            {
                if((arr[i][j] == arr[i][q]) && (!iflag))
                {
                    //融合
                    var ii = arr[i][j];
                    arr[i][q] = arr[i][j] + arr[i][q];
                    arr[i][j] = 0;
                    move(i, j, ii, i, q, arr[i][q]);
                    achievementScore=achievementScore + arr[i][q];
                    document.getElementById("achievementScore").innerText = achievementScore;
                    blockNumber--;
                    if(arr[i][q] == 2048)
                    {
                        setTimeout(function()
                        {
                            alert("恭喜！通关！！！");
                            location.reload();
                        }, 250);
                    }
                    im = true;
                    iflag = true;
                }
                else
                {
                    //向空行移动
                    arr[i][q + 1] = arr[i][j];
                    if(j != (q + 1))
                    {
                        arr[i][j] = 0;
                        im = true;
                    }
                    move(i, j, arr[i][q + 1], i, q + 1, arr[i][q + 1]); 
                    q = q + 1;
                    iflag = false;
                }
            }
        }
        
    }
}

function keyUpDown()
{
    var im = false;
    for(var j = 0; j < 4; j++)
    {
        var i = 0;
        var q = -1;       //指向最右的元素
        var iflag = false;
        //找到最右的元素
        for(i = 0; i < 4; i++)
        {
            if(arr[i][j] != 0)
            {
                //滑动
                arr[0][j] = arr[i][j];
                if(i != 0)
                {
                    arr[i][j] = 0;
                    im = true; 
                }
                q = 0; 
                //滑动的展示
                move(i, j, arr[0][j], 0, j, arr[0][j]);            
                break;
            }
        }
        //此行不需要移动
        if(q == -1)
        {
            continue;
        }
        for(i++; i < 4; i++)
        {
            if(arr[i][j] != 0)
            {
                if((arr[i][j] == arr[q][j]) && (!iflag))
                {
                    //融合
                    var ii = arr[i][j];
                    arr[q][j] = arr[i][j] + arr[q][j];
                    arr[i][j] = 0;
                    move(i, j, ii, q, j, arr[q][j]);
                    achievementScore=achievementScore+arr[q][j];
                    document.getElementById("achievementScore").innerText=achievementScore;
                    blockNumber--;
                    if(arr[q][j]==2048)
                    {
                        setTimeout(function()
                        {
                            alert("恭喜！通关！！！");
                            location.reload();
                        },250);
                    }
                    im = true;
                    iflag = true;
                }
                else
                {
                    //向空行移动
                    arr[q + 1][j] = arr[i][j];
                    if(i != (q + 1))
                    {
                        arr[i][j] = 0;
                        im = true;
                    }
                    move(i, j, arr[q + 1][j], q + 1, j, arr[q + 1][j]); 
                    q = q + 1;
                    iflag = false;
                }
            }
        }
        
    }
    return im;
}

function keyDown()
{
    var keycode = event.keyCode; 
    if(keycode == 37)
    {
        if(keyLeftDown())
        {
            newBlock();
            blockNumber++;
        }
    }
    else if(keycode == 38)
    {
        if(keyUpDown())
        {
            newBlock();
            blockNumber++;
        }
    }
    else if(keycode == 39)
    {
        if(keyRightDown())
        {
            newBlock();
            blockNumber++;            
        }
    }
    else if(keycode == 40)
    {
        if(keyDownDown())
        {
            newBlock();
            blockNumber++;
        }
    }
    //触发判断
    if(blockNumber == 16)
    {
        for(var i = 0;i < 4;i++)
        {
            var jflag = false;
            for(var j = 0;j < 4;j++)
            {
                if(i != 3)
                {
                    if(arr[i][j] == arr[i + 1][j])
                    {
                        jflag = true;
                        break;
                    }
                }
                if(j!=3)
                {
                    if(arr[i][j]==arr[i][j+1])
                    {
                        jflag =true;
                        break;
                    }
                }
            }
            if(jflag)
            {
                break;
            }
        }
        if(!jflag)
        {
            setTimeout(function()
            {
                alert("Game Over");
                location.reload();
            },300);
        }
    }
    return false;
}

document.onkeydown = keyDown;