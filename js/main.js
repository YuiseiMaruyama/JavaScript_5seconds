(function (){
    'use strict';

    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;

    start.addEventListener('click', function(){
        startTime = Date.now();
    });
    stop.addEventListener('click', function(){
        var elapseTime ;
        // ミリ秒->秒に変換
        elapseTime = (Date.now() - startTime) / 1000;
        // elapseTime = 4;

        //toFixed()で小数点以下を指定
        result.textContent = elapseTime.toFixed(3);

    });
})();