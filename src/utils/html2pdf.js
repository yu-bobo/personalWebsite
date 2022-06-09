import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
/**
 * @param  ele          要生成 pdf 的DOM元素（容器）
 * @param  padfName     PDF文件生成后的文件名字
 * @param  callback     下载完成之后的回调
 * */

function downloadPDF(ele, pdfName, callback) {
    html2canvas(ele, {
        dpi: 300,
        scale: 2,
        // allowTaint: true,  //允许 canvas 污染， allowTaint参数要去掉，否则是无法通过toDataURL导出canvas数据的
        useCORS: true  //允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。
    }).then((canvas) => {
        //未生成pdf的html页面高度
        var leftHeight = canvas.height;
        var a4Width = 595.28
        var a4Height = 821.89 //（一张A4高=841.89减去20，使得上下边距20,pdf.addImage生成上边距（第四个参数=10）致使使得上下边距各10）
        //一页pdf显示html页面生成的canvas高度;
        var a4HeightRef = Math.floor(canvas.width / a4Width * a4Height);
        //pdf页面偏移
        var position = 0;
        var pageData = canvas.toDataURL('image/jpeg', 1.0);
        var pdf = new jsPDF('x', 'pt', 'a4');
        var index = 1,
            canvas1 = document.createElement('canvas'),
            height;
        pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen');

        function createImpl(canvas) {
            if (leftHeight > 0) {
                index++;
                var checkCount = 0;
                if (leftHeight > a4HeightRef) {
                    var i = position + a4HeightRef;
                    for (i = position + a4HeightRef; i >= position; i--) {
                        var isWrite = true
                        for (var j = 0; j < canvas.width; j++) {
                            var c = canvas.getContext('2d').getImageData(j, i, 1, 1).data
                            if (c[0] != 0xff || c[1] != 0xff || c[2] != 0xff) {
                                isWrite = false
                                break
                            }
                        }
                        if (isWrite) {
                            checkCount++
                            if (checkCount >= 10) {
                                break
                            }
                        } else {
                            checkCount = 0
                        }
                    }
                    height = Math.round(i - position) || Math.min(leftHeight, a4HeightRef);
                    if (height <= 0) {
                        height = a4HeightRef;
                    }
                } else {
                    height = leftHeight;
                }
                canvas1.width = canvas.width;
                canvas1.height = height;
                var ctx = canvas1.getContext('2d');
                ctx.drawImage(canvas, 0, position, canvas.width, height, 0, 0, canvas.width, height);
                if (position != 0) {
                    pdf.addPage();
                }
                pdf.addImage(canvas1.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 10, a4Width, a4Width / canvas1.width * height);
                leftHeight -= height;
                position += height;
                if (leftHeight > 0) {
                    setTimeout(createImpl, 500, canvas);
                } else {
                    pdf.save(pdfName);
                    callback()
                }
            }
        }

        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < a4HeightRef) {
            pdf.addImage(pageData, 'JPEG', 0, 10, a4Width, a4Width / canvas.width * leftHeight);
            pdf.save(pdfName)
            callback()
        } else {
            try {
                pdf.deletePage(0);
                setTimeout(createImpl, 500, canvas);
            } catch (err) {
                console.log(err);
            }
        }
    })
}

export default downloadPDF
