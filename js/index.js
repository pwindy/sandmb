// tab选项卡切换
$(".mid_wap .tabs").on("click", function () {
    var itemIndex=$(this).index();
    $(this).addClass("show").siblings(".mid_wap .tabs").removeClass("show");
    $(".tabsmain").eq(itemIndex).show().siblings(".tabsmain").hide();
});

// 弹框出现
function showlayer(layer_name){
    $('.layerdiv').hide();
    var audiodiv = document.getElementsByClassName('audiodiv');
    for(var i=0,len=audiodiv.length;i<len;i++){
        audiodiv[i].pause();
        audiodiv[i].currentTime = 0;
    }

    $('#'+layer_name).show();
    document.getElementById('audio_'+ layer_name).play();
}
// 弹框关掉
function closelayer(layer_name){
    $('#'+layer_name).hide();
    $('.layerdiv').hide();
    document.getElementById('audio_'+ layer_name).currentTime = 0;
    document.getElementById('audio_'+ layer_name).pause();
}

// 视频打开
function showvideo(layer_name){
    closelayer(layer_name);

    var showtit= '';
    if(layer_name == 'yjbz'){
        // 1
        showtit = '应急保障(学校、重要活动)';
    }else if(layer_name == 'jjlsyd'){
        // 2
        showtit = '基建临时用电(桩机、隧道等)';
    }else if(layer_name == 'cdz'){
        // 3
        showtit = '充电站(光储充一体化)';
    }else if(layer_name == 'yjby'){
        // 4
        showtit = '应急备用(银行、医院、学校等)';
    }else if(layer_name == 'msbz'){
        // 5
        showtit = '民生保障(山区、海岛离网供电)';
    }else if(layer_name == 'ndes'){
        // 6
        showtit = '柴储一体化智能微网电站';
    }else if(layer_name == 'ydyy'){
        // 7
        showtit = '移动应用(带车底移动电源车)';
    }else if(layer_name == 'dy'){
        // 8
        showtit = '电网(储能调峰，用户侧响应)';
    }else if(layer_name == 'ness'){
        // 9
        showtit = '智能储能电站 NESS';
    }else if(layer_name == 'xny'){
        // 10
        showtit = '新能源(离网、并网调节)';
    }else if(layer_name == 'ckgy'){
        // 11
        showtit = '采矿工业(油田、矿井等)';
    }else if(layer_name == 'fdc'){
        // 12
        showtit = '发电厂(储能调频)';
    }else if(layer_name == 'cytyq'){
        // 13
        showtit = '柴油、天然气发电机组';
    }


    var audiodiv = document.getElementsByClassName('audiodiv');
    for(var i=0,len=audiodiv.length;i<len;i++){
        audiodiv[i].pause();
        audiodiv[i].currentTime = 0;
    }

    layer.open({
        type: 1,
        closeBtn: 2,
        title: showtit,
        closeBtn: 1,
        zIndex: 19891014,
        shadeClose: true,
        area: ['300px', '301px'],
        content: `
        <video controls autoplay loop webkit-playsinline playsinline x5-playsinline x-webkit-airplay='allow'>
            <source src="https://jnyd.oss-cn-shenzhen.aliyuncs.com/`+layer_name+`.mp4" type="video/mp4" />
        </video>
        `
    });



}
