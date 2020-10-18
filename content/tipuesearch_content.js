var tipuesearch = {"pages": [{'title': 'About', 'text': 'Introduction to Automatic Control System.pdf \n 網際機電整合控制系統設計案例研究 \n A Case Study on the Design of Web-based Mechatronic Automatic Control System \n Members: \n 50733105 \n 50733144 \n 50733146 \n 50733152 \n Methodology: \n \n Use  NX12 ,  Onshape  and  Solvespace  to create system part assembly \n STL  to  Webots \xa0或  CoppeliaSim \n Classic Control to Modern Control system design \n Flask + uwsgi on Ubuntu and Windows 10 2004 \n Machine Learning and Optimal Control System Design \n \n Webots Inverted Pendulum: \n https://robotbenchmark.net/benchmark/inverted_pendulum/ \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': '進行步驟', 'text': '1. 閱讀 \n 2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n 了解基本回授, 控制名詞與原理 \n 2. 閱讀 \n 2012 Mechatronic Systems:\xa0 \n https://link.springer.com/book/10.1007/978-3-642-22324-2 \xa0 \n 了解機電系統與傳統與現代設計方法, 導入 Sympy 與  https://github.com/python-control/python-control,   2019 Python for Control.pdf  與  Symbolic Computing in Python.pdf \n 3. 學習如何安裝配置 Ubuntu 20.04 實體與虛擬主機, 將  CMSiMDE  靜態與動態網站分別配置在實體與虛擬伺服器上. 學習如何將動態 Flask 程式部署至  Heroku. \n 4. 在 Ubuntu 20.04 伺服器上安裝 ubuntu-desktop 與  Xrdp , 安裝  CoppeliaSim , 透過 Remote Desktop Client 連至遠端伺服器, 以 interactive 及  headless  開啟  CoppeliaSim  場景檔案, 進行單機與網際  Python Remote API  模擬控制  CoppeliaSim  場景中的機電系統. \n 5. 將  https://github.com/mdecourse/vrep_inverted_pendulum  改為 Python3 以及 CoppeliaSim 4.1.0 rev1 版本 (若要在 Acer E5200 電腦上執行, 必須使用  V-rep 3.6.1 版 ) 相容. 以下為參考資料: \n https://github.com/mdecourse/vrep-stuff \n inverted pendulum system modeling \n simulation of the inverted pendulum.pdf \n solve the inverted pendulum problem using DQN algorithm \n https://in.mathworks.com/help/control/ug/control-of-an-inverted-pendulum-on-a-cart.html \n 其中的機電系統 3D 零組件可以採  NX12 ,  Onshape  或  Solvespace  繪製. \n', 'tags': '', 'url': '進行步驟.html'}, {'title': 'ebook1', 'text': '2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n Control and Feedback are everywhere. \n Feedback is information obtained from a system used to change its behavior. \n A system is causal (符合因果關係) when for any signal in the behavior the future cannot influence the past of the signal. Because in our discussions signals are functions of time, causality (因果關係) is an all too natural a property. It is indeed not conceivable that the presently experienced shower temperature could possibly depend on future positions of the water taps. Indeed, our shower is a causal system (因果系統). \n', 'tags': '', 'url': 'ebook1.html'}, {'title': 'Project', 'text': 'https://github.com/JuliaRobotics \xa0  \n https://juliarobotics.org/   \n Julia language documentation: \n https://docs.julialang.org/en/v1/ \n \n \n', 'tags': '', 'url': 'Project.html'}, {'title': 'Reference', 'text': '', 'tags': '', 'url': 'Reference.html'}, {'title': 'Bond Graphs', 'text': 'https://github.com/mdecourse/BondGraphTools \xa0 \n https://www.gawthrop.net/Books/GawSmi96.pdf \xa0 \n Bond Graph Modeling.pdf \n Bond Graph Modeling and Simulation of Mechatronic.pdf \n bond_graph_modeling_postprint.pdf \n https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/ompython.html \xa0 \n', 'tags': '', 'url': 'Bond Graphs.html'}, {'title': 'Glowscript', 'text': 'https://www.glowscript.org/ \xa0 \n https://github.com/vpython/glowscript \xa0 \n https://github.com/atsepkov/RapydScript \xa0 \n Examples \n \n \n \n \n \n', 'tags': '', 'url': 'Glowscript.html'}, {'title': 'Rapydscript', 'text': 'Test embedded RapydScript \n \n \n Add from 1 to 10 \n Source Codes: \n <h4>Test embedded RapydScript</h4>\n<script src="https://sw.kovidgoyal.net/rapydscript/repl/rapydscript.js"></script>\n<script>// <![CDATA[\nvar compiler = RapydScript.create_embedded_compiler();\nvar js = compiler.compile(`\ndef hello_world():\n    sum=0\n    for i in range(11):\n        sum=sum+i\n    print(sum)\n    alert("from 1 add to 10 is :" + str(sum))`);\nfunction mySum() {\n    document.body.textContent = js;\n    eval(js);\n    eval(\'hello_world()\');\n};\n// ]]></script>\n<p><button onclick="mySum()">Add from 1 to 10</button></p> \n \n', 'tags': '', 'url': 'Rapydscript.html'}, {'title': 'Atoms', 'text': '\n \n \n \n \n \n Source Codes: \n <div class="glowscript" id="glowscript">\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery.min.js"></script>\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery-ui.custom.min.js"></script>\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/package/glow.3.0.min.js"></script>\n<script type="text/javascript">// <![CDATA[\n//--><![CDATA[//><!--\n\n// START JAVASCRIPT\n;(function() {;\nasync function __main__() {\n"use strict";\n\nvar version = ["3.0", "glowscript"];\nArray.prototype.toString = function() { return __parsearray(this) };\nvar scene = canvas();\nvar vector = vec;\nvar axes = [vec(1,0,0), vec(0,1,0), vec(0,0,1)]\n\nvar k = 1\nvar m = 1\nvar spacing = 1.0\nvar atom_radius = 0.3["*"](spacing)\nvar L0 = spacing["-"](1.8["*"](atom_radius))\nvar V0 = pi["*"](pow(0.5["*"](atom_radius),2))["*"](L0) // initial volume of spring\nvar N = 3\nvar crystal = makeCrystal(N, atom_radius, spacing, 0.1["*"](spacing)["*"](sqrt(k["/"](m))))\nscene.center = 0.5["*"](N["-"](1))["*"](vec(1,1,1))\nscene.autoscale = false\nvar dt = 0.04["*"](2["*"](pi)["*"](sqrt(m["/"](k))))\n\n// Display text below the 3D graphics:\nscene.title = "A model of a solid represented as atoms connected by interatomic bonds"\n\nfunction makeCrystal( N, atom_radius, spacing, momentumRange ) {\n    var crystal = { atoms:[], springs:[] }\n    var atom\n    var x,y,z\n\n    function atomAt(np) {\n        if (np.x[">="](0) && np.y[">="](0) && np.z[">="](0) && np.x["<"](N) && np.y["<"](N) && np.z["<"](N))\n            return crystal.atoms[np.x["+"](np.y["*"](N))["+"](np.z["*"](N)["*"](N))]\n        // Otherwise create an invisible wall and return it\n        var w = box()\n        w.visible = false  // comment out to see the true model\n        w.size = atom_radius["*"](vec(1,1,1))\n        w.pos = np["*"](spacing)\n        w.momentum = vec(0,0,0)\n        return w\n    }\n\n    // Create N^3 atoms in a grid\n    for(z=0; z["<"](N); z++)\n        for(y=0; y["<"](N); y++)\n            for(x=0; x["<"](N); x++) {\n                atom = sphere()\n                atom.pos = vec(x,y,z)["*"](spacing)\n                atom.size = 2["*"](atom_radius)["*"](vec(1,1,1))\n                atom.color = vec(0,0.58,0.69)\n                atom.momentum = momentumRange["*"](vec.random())\n                crystal.atoms.push( atom )\n            }\n    \n    // Create a grid of springs linking each atom to the adjacent atoms\n    // in each dimension, or to invisible walls where no atom is adjacent\n    for(var d=0; d["<"](3); d++)\n        for(z=1["-u"](); z["<"](N); z++)\n            for(y=1["-u"](); y["<"](N); y++)\n                for(x=1["-u"](); x["<"](N); x++) {\n                    atom = atomAt(vec(x,y,z))\n                    var neighbor = atomAt(vec(x,y,z)["+"](axes[d]))\n\n                    if (atom.visible || neighbor.visible) {\n                        var spring = helix()\n                        spring.visible = atom.visible && neighbor.visible\n                        spring.thickness = 0.05\n                        spring.size = vec(spacing,atom_radius,atom_radius)\n                        spring.atoms = [ atom, neighbor ]\n                        spring.color = vec(1,0.5,0)\n                        crystal.springs.push(spring)\n                    }\n                }\n    return crystal\n}\n\nwhile (true) {\n    await rate(60)\n    for(var a=0; a["<"](crystal.atoms.length); a++) {\n        var atom = crystal.atoms[a]\n        atom.pos = atom.pos["+"](atom.momentum["/"](m)["*"](dt))\n    }\n    for(var s=0; s["<"](crystal.springs.length); s++) {\n        var spring = crystal.springs[s]\n        spring.axis = spring.atoms[1].pos["-"](spring.atoms[0].pos)\n        var L = mag(spring.axis)\n        spring.axis = spring.axis.norm()\n        spring.pos = spring.atoms[0].pos["+"](0.5["*"](atom_radius)["*"](spring.axis))\n        var Ls = L["-"](1["*"](atom_radius))\n        spring.size.x = Ls\n        var Fdt = spring.axis["*"](k["*"](dt)["*"](1["-"](spacing["/"](L))))\n        spring.atoms[0].momentum = spring.atoms[0].momentum["+"](Fdt)\n        spring.atoms[1].momentum = spring.atoms[1].momentum["-"](Fdt)\n    }\n}\n\n}\n;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()\n// END JAVASCRIPT\n\n//--><!\n// ]]></script>\n</div> \n \n', 'tags': '', 'url': 'Atoms.html'}, {'title': 'Samples', 'text': '\n \n \n \n \n \n Source Codes: \n <div class="glowscript" id="glowscript">\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery.min.js"></script>\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery-ui.custom.min.js"></script>\n<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/package/glow.3.0.min.js"></script>\n<script type="text/javascript">\n\n// START JAVASCRIPT\n;(function() {;\nasync function __main__() {\n"use strict";\n\nvar version = ["3.0", "glowscript"];\nArray.prototype.toString = function() { return __parsearray(this) };\nvar scene = canvas();\nvar vector = vec;\n\nscene.title = "A ball bounces in a box"\n\nvar side = 4.0\nvar thk = 0.3\nvar s2 = 2["*"](side)["-"](thk)\nvar s3 = 2["*"](side)["+"](thk)\nvar wallR = box ( {pos:vec( side, 0, 0), size:vec(thk,s2,s3),  color : color.red} )\nvar wallL = box ( {pos:vec(side["-u"](), 0, 0), size:vec(thk,s2,s3),  color : color.red} )\nvar wallB = box ( {pos:vec(0, side["-u"](), 0), size:vec(s3,thk,s3),  color : color.blue} )\nvar wallT = box ( {pos:vec(0,  side, 0), size:vec(s3,thk,s3),  color : color.blue} )\nvar wallBK = box( {pos:vec(0, 0, side["-u"]()), size:vec(s2,s2,thk), color : color.gray(0.7)} )\n\nvar ball = sphere ( {color : color.green, size : 0.8["*"](vec(1,1,1))} )\nball.mass = 1.0\nball.p = vec (0.15["-u"](), 0.23["-u"](), 0.27)\nattach_trail(ball, {pps:200, retain:100, color:ball.color})\n\nside = side["-"](thk["*"](0.5))["-"](ball.size.x["/"](2))\nvar dt = 0.3\n\nwhile ( true) { \n  // The rate statement tells GlowScript to execute the while statements\n  // about 200 times per second. The "wait" keyword is necessary to permit\n  // periodic updates to the window.\n  await rate(200)\n  ball.pos = ball.pos["+"](ball.p["/"](ball.mass)["*"](dt))\n  if (! (side["-u"]()["<"](ball.pos.x) && ball.pos.x["<"](side))) { \n    ball.p.x = ball.p.x["-u"]()\n  }\n  if (! (side["-u"]()["<"](ball.pos.y) && ball.pos.y["<"](side))) { \n    ball.p.y = ball.p.y["-u"]()\n  }\n  if (! (side["-u"]()["<"](ball.pos.z) && ball.pos.z["<"](side))) { \n    ball.p.z = ball.p.z["-u"]()\n  }\n}\n\n}\n;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()\n// END JAVASCRIPT\n</script>\n</div> \n \n', 'tags': '', 'url': 'Samples.html'}, {'title': 'RLearning', 'text': 'Train a model to balance a pole on a cart using reinforcement learning. \n Description \n This example illustrates how to use TensorFlow.js to perform simple  reinforcement learning  (RL). Specifically, it showcases an implementation of the policy-gradient method in TensorFlow.js. This implementation is used to solve the classic  cart-pole control problem. \n Through  self play  the agent will learn to balance the pole for as many  steps  as it can. \n Instructions \n \n \n Choose a hidden layer size and click "Create Model". \n Select training parameters and then click "Train". \n Note that while the model is training it periodically saves a copy of itself to local browser storage, this mean you can refresh the page and continue training from the last save point. If at any point you want to start training from scratch, click "Delete stored Model". \n Once the model has finished training you can click "Test" to see how many \'steps\' the agent can balance the pole for. You can also click \'Stop\' to pause the training after the current iteration ends if you want to test the model sooner. \n During training and testing a small simulation of the agent behaviour will be rendered. \n \n Status \n Standing by. \n \n Initialize Model \n \n \n Hidden layer size(s) (e.g.: "256", "32,64"):   \n Create model \n \n Locally-stored model   \n Delete stored model \n \n Training Parameters \n \n Number of iterations:   \n Games per iteration:   \n Max. steps per game:   \n Reward discount rate:   \n Learning rate:   \n Render during training:     Uncheck me to speed up training. \n Train   Test \n \n \n Training Progress \n \n Iteration #:   \n Game #:   \n Training speed:   \n \n \n Simulation \n \n \n \n \n \n \n \n  Import tfjs-vis  \n \n \n \n \n \n \n', 'tags': '', 'url': 'RLearning.html'}, {'title': 'Ebooks', 'text': '2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n 2012 Mechatronic Systems:\xa0 \n https://link.springer.com/book/10.1007/978-3-642-22324-2 \xa0 \n 2015 Feedback Control: \n https://link.springer.com/book/10.1007/978-1-4471-6675-7 \n 2018\xa0Reinforcement Learning for Optimal Feedback Control: \n https://link.springer.com/book/10.1007/978-3-319-78384-0 \xa0 \n 2019 Python for Control.pdf \n 2020 Feedback: \n https://link.springer.com/book/10.1007/978-3-030-34839-7 \xa0 \n \n', 'tags': '', 'url': 'Ebooks.html'}, {'title': 'Feedback', 'text': "針對 CoppeliaSim 中 Python Remote API 不提供的功能, 可以透過 Lua 製作, 然後再以  https://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm#simxCallScriptFunction  呼叫. 相關討論請參考  https://forum.coppeliarobotics.com/viewtopic.php?t=7699 \n 以下的 Inverted Pedulum 控制模擬可以視為專題 Task 之一: \n https://github.com/mdecourse/vrep_inverted_pendulum  採用舊版的 Python2 以及舊版的 V-rep 製作, 可以嘗試改為 Python3 以及 CoppeliaSim 4.1.0 rev1 版本相容. \n Webots Inverted Pendulum: \n https://robotbenchmark.net/benchmark/inverted_pendulum/ \xa0 \n https://github.com/mdecourse/vrep-stuff \n inverted pendulum system modeling \n simulation of the inverted pendulum.pdf \n solve the inverted pendulum problem using DQN algorithm \n https://in.mathworks.com/help/control/ug/control-of-an-inverted-pendulum-on-a-cart.html \n \xa0磁浮控制系統: \n Magnetic levitation control.pdf \n Controller Design for a Magnetic Levitation Kit usingOpenModelica’s Integration with the Julia Language.pdf \n CoppeliaSim Lua feedback PID Control: \n function saturate(x,thr)\n    if x>thr then return thr end\n    if x<-thr then return -thr end\n    return x\nend\n\nfunction PID_create(Kp,Ki,Kd)\n    pid={}\n    pid.pre_error=0.0\n    pid.integral=0.0\n    pid.Kp=Kp\n    pid.Ki=Ki\n    pid.Kd=Kd\n    return pid\nend\n\nfunction PID(pid, setpoint, actual_position, dt)\n    error=setpoint-actual_position\n    if pid.Ki>0.0 then\n        pid.integral=pid.integral+error*dt\n    end\n    derivative=(error-pid.pre_error)/dt\n    output=pid.Kp*error+saturate(pid.Ki*pid.integral,1000)+pid.Kd*derivative\n    output=saturate(output,2000)\n    pid.pre_error=error\n    return output\nend\n\nif (sim_call_type==sim.syscb_init) then\n    --graph=sim.getObjectHandle('Graph')\n    pjoint=sim.getObjectHandle('pjoint')\n    rjoint1=sim.getObjectHandle('rjoint1')\n    pad=sim.getObjectHandle('pad')\n    pidRot=PID_create(64.05,34.65,0.709)\n    pidPos=PID_create(54,0,0.629)\n    sim.addStatusbarMessage('angle controller = { P='..pidRot.Kp..'  I='..pidRot.Ki..'  D='..pidRot.Kd..' }   horizontal controller = { P='..pidPos.Kp..'  I='..pidPos.Ki..'  D='..pidPos.Kd..' }')\nend\n\nif (sim_call_type==sim.syscb_actuation) then  \n    dt=sim.getSimulationTimeStep()\n    u_angle=PID(pidRot, 0, sim.getJointPosition(rjoint1), dt)\n    u_pos=PID(pidPos, 0, sim.getJointPosition(pjoint), dt)\n   -- sim.setGraphUserData(graph,'e_ang',pid1.pre_error)\n   -- sim.setGraphUserData(graph,'e_pos',pid2.pre_error)\n    u=u_angle-u_pos\n    sim.setJointTargetVelocity(pjoint,u)\nend \n \n", 'tags': '', 'url': 'Feedback.html'}, {'title': 'CMSiMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python + Flask 建構的網際內容管理系統, 以單人管理的模式建立, 其中包含動態網頁系統, 靜態網頁系統, Pelican 網誌與 Reveal.js 網際簡報系統. \n https://github.com/mdecourse/cmsimde \xa0執行需要: \n pip install flask flask_cors lxml bs4 markdown pelican leo \n 等模組. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'Git', 'text': '常用 Git 指令: \n git clone --recurse-submodules  https://github.com/mdecourse/cp2020.git \n git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n git remote add origin https://github.com/mdecourse/wcm1kmolinfo.git git add . git commit -m "message" git push -u --allow-unrelated-histories origin master \n git push --set-upstream origin master \n', 'tags': '', 'url': 'Git.html'}, {'title': 'Windows', 'text': 'Windows 10 64 位元電腦中的可攜程式環境\xa0 \n NX 高端電腦輔助機械設計套件 \n 登入 @gm 帳號, \xa0 下載 NX12 可攜版 \xa0(949MB) \n 配置 2004 版本後測試 Python 可攜程式環境, 用來建立  CMSiMDE  近端工作環境 (含  NX12  與  CoppeliaSim  操作) \n 在 2004 版次中安裝 WSL 2, 安裝 Ubuntu 20.04 後啟用  CMSiMDE  工作環境\xa0 \xa0(含  NX12  與  CoppeliaSim  操作) \n 建立  Virtualbox   NX12  認證主機 \n \n', 'tags': '', 'url': 'Windows.html'}, {'title': 'Ubuntu', 'text': "在  Virtualbox  與實體主機中利用 純 IPv6 網址, 配置  Ubuntu  20.04 部署動態與靜態  CMSiMDE  網站 (含  Let's Encrypt  https 設置). \n 在  Virtualbox  與實體主機中利用 純 IPv6 網址,\xa0配置  CoppeliaSim  模擬系統, 用於建立虛擬機電控制系統. \n \n", 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'Heorku', 'text': '將近端與自架伺服器中的  CMSiMDE  靜態網頁部署至  Heroku . \n 利用  Heroku  中的動態 Flask 程式與自架伺服器中的  CoppeliaSim  模擬系統互動. \n Heroku 操作 \n 登入 @gm  下載 Heroku cli 可攜.7z , 解開壓縮檔案後, 在 start.bat 中將 Heroku bin 設定指令搜尋路徑, 重新啟動後, 以 heroku version 確定指令可以正常執行後, heroku login 成功後, 登入帳號密碼會存入 home/_netrc 中. 之後便可直接透過 heroku cli 指令直接對遠端主機下命令. \n', 'tags': '', 'url': 'Heorku.html'}, {'title': 'Certbot', 'text': 'https://letsencrypt.org/ \xa0 \n 以下為實體主機配置 Certbot 時傳回資料: \n IMPORTANT NOTES: \xa0- Congratulations! Your certificate and chain have been saved at: \xa0\xa0 /etc/letsencrypt/live/jcad.kmol.info/fullchain.pem \xa0\xa0 Your key file has been saved at: \xa0\xa0 /etc/letsencrypt/live/jcad.kmol.info/privkey.pem \xa0\xa0 Your cert will expire on 2020-12-18. To obtain a new or tweaked \xa0\xa0 version of this certificate in the future, simply run certbot \xa0\xa0 again. To non-interactively renew *all* of your certificates, run \xa0\xa0 "certbot renew" \xa0- Your account credentials have been saved in your Certbot \xa0\xa0 configuration directory at /etc/letsencrypt. You should make a \xa0\xa0 secure backup of this folder now. This configuration directory will \xa0\xa0 also contain certificates and private keys obtained by Certbot so \xa0\xa0 making regular backups of this folder is ideal. \n Test automatic renewal The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command: sudo certbot renew --dry-run The command to renew certbot is installed in one of the following locations: \xa0\xa0\xa0 /etc/crontab/ \xa0\xa0\xa0 /etc/cron.*/* \xa0\xa0\xa0 systemctl list-timers \n \n', 'tags': '', 'url': 'Certbot.html'}]};