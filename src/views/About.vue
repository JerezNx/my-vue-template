<template>
  <div id="personal" class="page-center-box">
    <!-- canvas绘制面板用于绘图 -->
    <canvas
      id="myCanvas"
      width="375"
      height="750"
      style="border:1px solid #d3d3d3; "
    >对不起，你的浏览器不支持签名！！！</canvas>

    <!-- 签名面板 -->
    <div id="signatureparent">
      <span>在下面签名</span>
      <div id="signature"></div>
      <div class="btn_box">
        <a id="jq_join" class="btn">确定</a>
        <a id="clear" class="btn">清除</a>
      </div>
    </div>

    <div id="test"></div>
    <!-- 用于显示绘制成的图片 -->
    <img src id="hetong" />
  </div>
</template>

<script>
// import $ from "jquery";
import { MessageBox } from 'mint-ui';
import "jsignature";
export default {
  mounted() {
    $("#test").text("123");
    this.hetong();
    this.qianming();
    this.clearSign();
    this.writeSign();
  },
  methods: {
    hetong() {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, 375, 750);
      ctx.fillStyle = "#000";
      ctx.font = "16px Arial";
      ctx.fillText("某某公司借款条约", 120, 30);
      ctx.font = "12px Arial";
      ctx.fillText("甲方（借款人）：____", 10, 60);
      ctx.fillText("身份证号码：__", 10, 80);
      ctx.fillText("乙方（贷款人）：", 10, 100);
      ctx.fillText("企业代码：", 10, 120);
      ctx.fillText("协商一致的基础上达成如下协议，以资双方共同遵守。", 10, 140);
      ctx.fillText("乙方贷给甲方人民币（大写）____，于 ____年", 10, 160);
      ctx.fillText("____月 ____日前交付甲方。", 10, 180);
      ctx.fillText("借款利息：_____________", 10, 200);
      ctx.fillText("借款期限：_____________", 10, 220);
      ctx.fillText(
        "还款日期： ____年 ____月 ____日。 还款方式：现金/_________",
        10,
        240
      );
      ctx.fillText("支付。", 10, 260);
      ctx.fillText("违约责任：", 10, 280);
      ctx.fillText("1、借款方的违约责任", 10, 300);
      ctx.fillText(
        "（1）借款方不按合同规定的用途使用借款，贷款方有权收回部分",
        10,
        320
      );
      ctx.fillText(
        "或全部贷款，对违约使用的部分，按银行规定的利率加收罚息。",
        10,
        340
      );
      ctx.fillText(
        "（2）借款方如逾期不还借款，贷款方有权追回借款，并从到期日起",
        10,
        360
      );
      ctx.fillText("付日息1%", 10, 380);
      ctx.fillText(
        "（3）借款方使用借款造成损失浪费或利用借款合同进行违法活动的，",
        10,
        400
      );
      ctx.fillText(
        "贷款方应追回贷款本息，有关单位对直接责任人应追究行政和经济",
        10,
        420
      );
      ctx.fillText("责任。情节严重的，由司法机关追究刑事责任。", 10, 440);
      ctx.fillText("2、贷款方的违约责任", 10, 460);
      ctx.fillText(
        "（1）贷款方未按期提供贷款，应按违约数额和延期天数，付给借",
        10,
        480
      );
      ctx.fillText(
        "款方违约金。违约金数额的计算与加收借款方的罚息计算相同。",
        10,
        500
      );
      ctx.fillText(
        "（2）利用借款合同进行违法活动的，追究行政和经济责任。情",
        10,
        520
      );
      ctx.fillText("节严重的，由司法机关追究刑事责任。", 10, 540);
      ctx.fillText(
        "争议解决方式： 双方协商解决，解决不成，提交__________人民",
        10,
        560
      );
      ctx.fillText("法院。", 10, 580);
      ctx.fillText(
        "本合同自 _____生效。本合同一式两份，双方各执一份，合同文本",
        10,
        600
      );
      ctx.fillText("具有同等法律效力。", 10, 620);
      ctx.fillText("甲方（签字、盖章）：", 10, 640);
      ctx.fillText("乙方（签字、盖章 附身份证复印件）：", 10, 680);
      ctx.fillText("合同签订日期 ：", 10, 720);
    },
    qianming() {
      let options = {
        width: "100%",
        height: "300px",
        signatureLine: false, //去除默认画布上那条横线
        lineWidth: "5"
      };
      $("#signature").jSignature(options);
    },
    clearSign() {
      /* 清除画布上的签名 */
      $("#clear").click(function() {
        $("#signature").jSignature("reset");
      });
    },
    writeSign() {
      /* 将签名写进画布里 */
      $("#jq_join").click(() => {
        /* 生成签名的图片 */
        var datapair = $("#signature").jSignature("getData", "image");
        var i = new Image();
        i.src = "data:" + datapair[0] + "," + datapair[1];
        i.image = datapair[1];

        var imgs;
        var c = document.getElementById("myCanvas");
        this.preImage(i.src, () => {
          // i x位置 y位置 图片x长 图片y长
          c.getContext("2d").drawImage(i, 200, 620, 150, 100);
          imgs = this.convertCanvasToImage(c);
          $("#hetong")
            .attr("src", imgs.src)
            .show();

          MessageBox.confirm("Success!").then(action => {
            // ...
          });

          var base64 = imgs.src;
          // $.ajax({
          //     url: "服务器地址",
          //     type: "post",
          //     dataType: 'json',
          //     data: { base64: base64, id: $.trim('<{$id}>') },
          //     success: function (data) {
          //         if (data.status == 'success') {
          //             layer.msg(data.msg, { icon: 1 });
          //             setTimeout("window.location.href='/mcenter/member/index'", 3000);
          //         } else {
          //             layer.msg(data.msg, { icon: 2 });
          //         }
          //     }
          // });
        });
      });
    },

    /* 解决谷歌浏览器的兼容问题 */
    preImage(url, callback) {
      var img = new Image(); //创建一个Image对象，实现图片的预下载
      img.src = url;
      if (img.complete) {
        // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback.call(img);
        return; // 直接返回，不用再处理onload事件
      }
      img.onload = function() {
        //图片下载完毕时异步调用callback函数。
        callback.call(img); //将回调函数的this替换为Image对象
      };
    },
    /* 将canvas转为图片 */
    convertCanvasToImage(canvas) {
      //新Image对象，可以理解为DOM
      var image = new Image();
      // canvas.toDataURL 返回的是一串Base64编码的URL
      // 指定格式 PNG
      image.src = canvas.toDataURL("image/png");
      return image;
    }
  }
};
</script>
<style>
#personal .hetong {
  font-size: 14px;
}

#personal .hetong > h2 {
  text-align: center;
}

#personal .btn_box {
  clear: both;
  overflow: hidden;
  text-align: center;
  margin-top: 10px;
  line-height: 30px;
}

#signatureparent {
  color: #333;
  background-color: darkgrey;
  padding: 0.1rem 0.1rem;
  margin-bottom: 0.2rem;
}

#signature {
  border: 2px;
  background-color: lightgrey;
}

#jq_join {
  width: 50%;
  display: inline-block;
  float: left;
  color: #fff;
  background-color: #ee9900;
}

#clear {
  width: 50%;
  display: inline-block;
  float: left;
  background-color: #868686;
}
</style>
