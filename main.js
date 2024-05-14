
        function getTimeElapsed() {
            var startDate = new Date("2023-11-04 00:00:00"); // 设置开始日期，替换为实际的起始日期
            var currentDate = new Date();
            var timeDiff = currentDate - startDate;

            var milliseconds = timeDiff % 1000;
            timeDiff = Math.floor(timeDiff / 1000);
            var seconds = timeDiff % 60;
            timeDiff = Math.floor(timeDiff / 60);
            var minutes = timeDiff % 60;
            timeDiff = Math.floor(timeDiff / 60);
            var hours = timeDiff % 24;
            timeDiff = Math.floor(timeDiff / 24);
            var days = timeDiff;

            var timeString = "宝宝我们已经在一起 " + days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒了！！";

            document.getElementById("timeElapsed").textContent = timeString;
        }

        setInterval(getTimeElapsed, 1000);

        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            const randomColor = getRandomColor();
            snowflake.style.backgroundColor = randomColor;
            let arrLove=['最爱宝宝了','罗猪婷要听话','超级超级喜欢你','特别特别爱你呦','耶耶耶✌','咕噜咕噜喂~','你好，我有一个帽衫~','希望我的宝宝能平平安安','希望我们能越来越幸福','kiss~kiss~','最爱最爱最爱宝宝']
            //设置一个数组让snowflake.innerHTML轮流赋值数组内容
            snowflake.innerHTML=arrLove[Math.floor(Math.random()*arrLove.length)]
            // snowflake.innerHTML = '最爱宝宝了'; // You can customize the snowflake symbol here
            return snowflake;
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function snowfall() {
            const snowContainer = document.getElementById('snow-container');
            const numSnowflakes = 50; // Adjust the number of snowflakes here
            for (let i = 0; i < numSnowflakes; i++) {
                const snowflake = createSnowflake();
                snowContainer.appendChild(snowflake);
            }
        }

        snowfall();

        function createSakura() {
            var sakura = document.createElement("div");
            sakura.className = "sakura";
            sakura.style.left = Math.random() * 100 + "vw";
            sakura.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(sakura);
            setTimeout(function () {
                sakura.remove();
            }, 10000);
        }

        setInterval(createSakura, 200);
