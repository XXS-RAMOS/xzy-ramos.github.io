import{_ as a,c as e,o,a2 as t}from"./chunks/framework.BSB0Uh0P.js";const b=JSON.parse('{"title":"更改电脑系统为WinDOS","description":"","frontmatter":{},"headers":[],"relativePath":"jibajc/windos.md","filePath":"jibajc/windos.md"}'),i={name:"jibajc/windos.md"},r=t('<h1 id="更改电脑系统为windos" tabindex="-1">更改电脑系统为WinDOS <a class="header-anchor" href="#更改电脑系统为windos" aria-label="Permalink to &quot;更改电脑系统为WinDOS&quot;">​</a></h1><blockquote><p>声明 此教程仅用于学习，最终解释权归SYSTEM-RAMOS-XZY所有</p></blockquote><h2 id="first" tabindex="-1">First： <a class="header-anchor" href="#first" aria-label="Permalink to &quot;First：&quot;">​</a></h2><h3 id="有些人吃饱了撑的-想把系统改为windos" tabindex="-1">有些人吃饱了撑的，想把系统改为WinDOS <a class="header-anchor" href="#有些人吃饱了撑的-想把系统改为windos" aria-label="Permalink to &quot;有些人吃饱了撑的，想把系统改为WinDOS&quot;">​</a></h3><h2 id="_1-win-r输入cmd打开命令提示符" tabindex="-1">1.Win+R输入CMD打开命令提示符 <a class="header-anchor" href="#_1-win-r输入cmd打开命令提示符" aria-label="Permalink to &quot;1.Win+R输入CMD打开命令提示符&quot;">​</a></h2><h2 id="_2-在命令提示符中输入以下黑壳命令" tabindex="-1">2.在命令提示符中输入以下黑壳命令 <a class="header-anchor" href="#_2-在命令提示符中输入以下黑壳命令" aria-label="Permalink to &quot;2.在命令提示符中输入以下黑壳命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>reg add &quot;HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon&quot; /v &quot;Shell&quot; /t REG_SZ /d &quot;cmd.exe&quot;</span></span></code></pre></div><h2 id="_3-注销" tabindex="-1">3.注销 <a class="header-anchor" href="#_3-注销" aria-label="Permalink to &quot;3.注销&quot;">​</a></h2><h3 id="有人想问了-怎么打开正常模式-很简单-在dos界面中输入explorer-exe就行了" tabindex="-1">有人想问了，怎么打开正常模式，很简单，在DOS界面中输入explorer.exe就行了 <a class="header-anchor" href="#有人想问了-怎么打开正常模式-很简单-在dos界面中输入explorer-exe就行了" aria-label="Permalink to &quot;有人想问了，怎么打开正常模式，很简单，在DOS界面中输入explorer.exe就行了&quot;">​</a></h3>',9),n=[r];function s(d,l,c,h,_,u){return o(),e("div",null,n)}const q=a(i,[["render",s]]);export{b as __pageData,q as default};