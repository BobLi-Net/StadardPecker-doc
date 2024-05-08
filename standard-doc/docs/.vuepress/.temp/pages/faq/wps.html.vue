<template><div><h1 id="wps插件相关问题" tabindex="-1"><a class="header-anchor" href="#wps插件相关问题"><span>WPS插件相关问题</span></a></h1>
<h2 id="wps菜单未出现-标准啄木鸟" tabindex="-1"><a class="header-anchor" href="#wps菜单未出现-标准啄木鸟"><span>WPS菜单未出现“标准啄木鸟”</span></a></h2>
<blockquote>
<ul>
<li>遇到问题不要着急，解决并不复杂，请您跟我一步一步来解决。</li>
<li>如果您想了解问题的详细原因，可以阅读：<RouteLink to="/guide/white-pager.html">标准啄木鸟操作原理白皮书</RouteLink>。</li>
</ul>
</blockquote>
<h3 id="第一步-诊断修复" tabindex="-1"><a class="header-anchor" href="#第一步-诊断修复"><span>第一步：诊断修复</span></a></h3>
<ol>
<li>
<p>通过桌面图标，<RouteLink to="/faq/setup.html#%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E6%89%93%E5%BC%80%E7%A8%8B%E5%BA%8F">以管理员身份</RouteLink>打开啄木鸟主程序。</p>
</li>
<li>
<p>如需登录，<RouteLink to="/guide/usage.html#%E7%AC%AC%E4%BA%8C%E6%AD%A5-%E7%99%BB%E5%BD%95">请先登录</RouteLink>。</p>
</li>
</ol>
<p><img src="http://doc.bzyxxcx.com/imgs/主界面介绍.png" alt=""></p>
<ol start="2">
<li>点击界面中的诊断修复-&gt;确认重置,得到“激活完成”结果。</li>
</ol>
<p><img src="http://doc.bzyxxcx.com/imgs/激活完成.png" alt=""></p>
<blockquote>
<p><strong>↓↓↓ 如未激活成功，请根据提示参考 ↓↓↓</strong></p>
<ul>
<li>提示“要使用此功能，请使用管理员身份启动程序”，解决办法请参考<RouteLink to="/faq/setup.html#%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E6%89%93%E5%BC%80%E7%A8%8B%E5%BA%8F">如何以管理员身份启动</RouteLink></li>
<li>提示“未将对象设置到引用的实例”，建议跳转至<RouteLink to="/faq/WPS.html#%E7%AC%AC%E4%B8%89%E6%AD%A5-%E5%AE%89%E8%A3%85%E5%BF%85%E5%A4%87%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83">第三步：安装必备的运行环境</RouteLink></li>
<li>提示“缺少VSTO运行环境无法使用Office组件”您可以点击确定调起安装缺少的组件，也可以跳转至<RouteLink to="/faq/word.html#%E7%AC%AC%E4%B8%89%E6%AD%A5-%E5%AE%89%E8%A3%85%E5%BF%85%E5%A4%87%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83">第三步：安装必备的运行环境</RouteLink></li>
</ul>
</blockquote>
<ol start="3">
<li>重启WPS，查看是否已经解决，如未解决，您可以继续进行下一步。</li>
</ol>
<blockquote>
<p>注意，如弹出是否安装、是否允许等提示，请务必点击允许、安装。</p>
</blockquote>
<h3 id="第二步-重新加载组件" tabindex="-1"><a class="header-anchor" href="#第二步-重新加载组件"><span>第二步：重新加载组件</span></a></h3>
<p><mark>这个问题出现的概率最高，异常关闭WPS也可能导致插件不加载，仅需此步骤即可解决。</mark></p>
<p><mark>如您原来可正常使用，突然插件消失，请重点排查此原因。</mark></p>
<ol>
<li>通过WPS菜单打开“工具-&gt;Com加载项”</li>
</ol>
<blockquote>
<p>WPS版本差异，可能菜单位置不同，但基本一致</p>
</blockquote>
<p><img src="http://doc.bzyxxcx.com/imgs/WPS加载项.png" alt=""></p>
<ol start="2">
<li>如果插件“StandardPeckerWordAddIn”处在未勾选状态，请勾选，然后点击确定。</li>
<li><strong>如插件未在列表中</strong>，查看是否如下图所示，有禁用插件，如存在则点击“进行管理”链接，并选中“StandardPeckerWordAddIn”点击“启用”。</li>
</ol>
<blockquote>
<p>注意：启用时，弹出的确认提醒，蓝色按钮是禁用，灰白色的才是启用。</p>
</blockquote>
<p><img src="http://doc.bzyxxcx.com/imgs/WPS加载项2.png" alt=""></p>
<ol start="4">
<li>查看是否已经解决，如未解决，您可以继续进行下一步。</li>
</ol>
<h3 id="第三步-安装必备的运行环境" tabindex="-1"><a class="header-anchor" href="#第三步-安装必备的运行环境"><span>第三步：安装必备的运行环境</span></a></h3>
<ol>
<li>下载“微软常用运行库合集”<a href="https://zhuomuniao-1316338950.cos.ap-beijing.myqcloud.com/weiruanheji.exe" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a></li>
<li>安装运行库，注意选择最后一项。</li>
</ol>
<p><img src="http://doc.bzyxxcx.com/imgs/运行库合集.png" alt=""></p>
<blockquote>
<p>运行库合集由第三方提供，其包含的组件均为微软官方组件,请放心使用。</p>
</blockquote>
<ol start="3">
<li>重启WPS，查看是否已经解决，如未解决，<strong>请重新尝试第一步、第二步</strong>。</li>
</ol>
<h3 id="第五步-确认未被杀毒软件拦截" tabindex="-1"><a class="header-anchor" href="#第五步-确认未被杀毒软件拦截"><span>第五步：确认未被杀毒软件拦截</span></a></h3>
<p><mark>声明：我们的软件不存在任何病毒，杀毒软件拦截仅仅为了防止非授权的恶意安装</mark></p>
<p>由于杀毒软件厂商不同操作大不相同，此处仅以360为例，其他杀毒软件请自行参考。</p>
<ol>
<li>
<p>尽管我们在发布版本时已提交360认证，且已审核通过，但按照360原则，仍需对插件安装行为弹出提醒，征询用户是否允许安装。</p>
</li>
<li>
<p><mark>当安装遇到提醒是否允许，请选择“运行程序所有操作”</mark></p>
</li>
<li>
<p>如误点阻止，请通过360主界面-&gt;拦截记录-&gt;找到我们的插件行为-&gt;点击允许即可。</p>
</li>
</ol>
<h3 id="第六步-重新安装" tabindex="-1"><a class="header-anchor" href="#第六步-重新安装"><span>第六步：重新安装</span></a></h3>
<p><mark>您可能已经尝试了以上所有步骤，均为解决，我们深感歉意，您可以<RouteLink to="/guide/contract.html">联系我们</RouteLink>，或通过下面的办法卸载重装，并安装到与第一次安装不同的目录，以防止拦截问题。</mark></p>
<ol>
<li>卸载程序。请参考：<RouteLink to="/guide/setup.html#%E8%BD%AF%E4%BB%B6%E5%8D%B8%E8%BD%BD">如何卸载</RouteLink></li>
<li>重新安装。请参考：<RouteLink to="/guide/setup.html#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F">如何安装</RouteLink></li>
</ol>
<h2 id="提示-请重新登录" tabindex="-1"><a class="header-anchor" href="#提示-请重新登录"><span>提示“请重新登录”</span></a></h2>
<p><img src="http://doc.bzyxxcx.com/imgs/重新登录.png" alt=""></p>
<ul>
<li>为了确保信息安装，您的登录状态最长会保留7天，超过7天，请重新登录。</li>
<li>登录步骤请参考<RouteLink to="/guide/login.html">如何登录</RouteLink></li>
<li>登录后重新打开WPS继续使用即可</li>
</ul>
<h2 id="提示-结果显示错误-或无结果" tabindex="-1"><a class="header-anchor" href="#提示-结果显示错误-或无结果"><span>提示“结果显示错误”或无结果</span></a></h2>
<ul>
<li>您可能多次打开了同一个报告文件，导致文件被锁定占用</li>
<li>请尝试关闭所有WPS程序，重新打开WPS，并重新打开报告文件</li>
</ul>
<h2 id="提示-服务错误请联系管理员" tabindex="-1"><a class="header-anchor" href="#提示-服务错误请联系管理员"><span>提示“服务错误请联系管理员”</span></a></h2>
<ul>
<li>如果您检查的报告太过庞大，可能会导致服务器拒绝提供服务，建议您采用检查选定区域方式，分批次提交</li>
<li>报告如果存在异常的符号，可能会导致这个错误，请您<RouteLink to="/guide/contract.html">联系我们</RouteLink>。</li>
<li>其他情况请直接联系我们：<RouteLink to="/guide/contract.html">联系我们</RouteLink>。</li>
</ul>
</div></template>


