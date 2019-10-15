export default {
    folders: [
        {
            parentId: null,
            id: 1,
            name: "HTML5|JavaScript|SQL",
            isShow: true,
            isChecked: false,
            type: "html",
            isStretch: true,
            children: [
                {
                    parentId: 1,
                    id: 11,
                    name: "The HTML",
                    isShow: true,
                    isChecked: false,
                    type: "html",
                    updateTime: "2019-2-8",
                    content: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <style>
        #header {
            background-color:black;
            color:white;
            text-align:center;
            padding:5px;
        }
        #nav {
            line-height:30px;
            background-color:#eeeeee;
            height:300px;
            width:100px;
            float:left;
            padding:5px;
        }
        #section {
            width:350px;
            float:left;
            padding:10px;
        }
        #footer {
            background-color:black;
            color:white;
            clear:both;
            text-align:center;
            padding:5px;
        }
    </style>
    <body>
    
    <div id="header">
        <h1>City Gallery</h1>
    </div>
    
    <div id="nav">
        London<br>
        Paris<br>
        Tokyo<br>
    </div>
    
    <div id="section">
        <h1>London</h1>
        <p>
            London is the capital city of England. It is the most populous city in the United Kingdom,
            with a metropolitan area of over 13 million inhabitants.
        </p>
        <p>
            Standing on the River Thames, London has been a major settlement for two millennia,
            its history going back to its founding by the Romans, who named it Londinium.
        </p>
    </div>
    
    <div id="footer">
        Copyright W3School.com.cn
    </div>
    <script>
        for (var i = 0; i < 10; i++) {
            console.info("Hello World");
        }
    </script>
    </body>
    </html>`
                },
                {
                    parentId: 1,
                    id: 12,
                    name: "The JAVAScript",
                    isShow: true,
                    isChecked: false,
                    type: "javascript",
                    updateTime: "2019-2-8",
                    content:
                        `function startTime() {
        var today = new Date()
        var h = today.getHours()
        var m = today.getMinutes()
        var s = today.getSeconds()
        // add a zero in front of numbers<10
        m = checkTime(m)
        s = checkTime(s)
        document.getElementById('txt').innerHTML = h + ":" + m + ":" + s
        t = setTimeout('startTime()', 500)
    }
    
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }`
                },
                {
                    parentId: 1,
                    id: 13,
                    name: "HELLO WORLD",
                    isShow: true,
                    isChecked: false,
                    type: 'java',
                    updateTime: "2019-2-8",
                    content: `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`
                },
                {
                    parentId: 1,
                    id: 14,
                    name: "The SQL",
                    isShow: true,
                    isChecked: false,
                    type: 'sql',
                    updateTime: "2019-2-8",
                    content: `SELECT LastName,FirstName FROM Persons;
    UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'`,
                },
            ],
        },
        {
            parentId: null,
            id: 999,
            name: "DEFAULT",
            isShow: false,
            isStretch: true,
            isChecked: false,
            children: [],
        }
    ],
    blogs: [
        {
            id: 1,
            title: "Generator ",
            author: null,
            tags: ["JavaScript","ES6"],
            previewContent: '生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。'+       '语法\n' +
            'function* gen() { ' +
            '  yield 1;' +
            '  yield 2;' +
            '  yield 3;' +
            '}' +
            'let g = gen(); ' +
            '// "Generator { }" 方法' +
            'Generator.prototype.next()' +
            '返回一个由 yield表达式生成的值。' +
            'Generator.prototype.return()' +
            '返回给定的值并结束生成器。' +
            'Generator.prototype.throw()' +
            '向生成器抛出一个错误。'
           ,
            htmlContent: '<p><strong>生成器</strong>对象是由一个 generator function 返回的,并且它符合可<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable" target="_blank">迭代协议</a>和<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator" target="_blank">迭代器协议</a>。</p><p><br></p><h2>语法</h2><p><br></p><pre class="ql-syntax" spellcheck="false">function* gen() { \n' +
            '  yield 1;\n' +
            '  yield 2;\n' +
            '  yield 3;\n' +
            '}\n' +
            '\n' +
            'let g = gen(); \n' +
            '// "Generator { }"\n' +
            '</pre><p><br></p><h2>方法</h2><p><code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next" target="_blank"><strong>Generator.prototype.next()</strong></a></code></p><p>返回一个由&nbsp;<code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" target="_blank">yield</a></code>表达式生成的值。</p><p><code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/return" target="_blank"><strong>Generator.prototype.return()</strong></a></code></p><p>返回给定的值并结束生成器。</p><p><code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw" target="_blank"><strong>Generator.prototype.throw()</strong></a></code></p><p>向生成器抛出一个错误。</p><p><br></p><h2>示例</h2><p>一个无限迭代器</p><pre class="ql-syntax" spellcheck="false">function* idMaker(){\n' +
            '    let index = 0;\n' +
            '    while(true)\n' +
            '        yield index++;\n' +
            '}\n' +
            '\n' +
            'let gen = idMaker(); // "Generator { }"\n' +
            '\n' +
            'console.log(gen.next().value); \n' +
            '// 0\n' +
            'console.log(gen.next().value); \n' +
            '// 1\n' +
            'console.log(gen.next().value); \n' +
            '// 2\n' +
            '// ...\n' +
            '</pre><p><br></p><p>参考: <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator" target="_blank">MDN</a></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>',
            date: new Date().toLocaleDateString(),
            updateTime: new Date().toLocaleDateString(),
            isShowBanner: true,
        }
    ],
}