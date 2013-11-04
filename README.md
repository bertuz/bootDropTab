bootDropTab
===========

a jquery plugin that enhances the dropdown tab functionality


Overview
--------
[Tabs](http://getbootstrap.com/2.3.2/javascript.html#tabs) functionality in Bootstrap is awesome, but you could soon find the need of tweaking the Dropdown tab behavior. In fact, each time you click a dropdown tab, the submenu appears. There's no chance to avoid opening the dropdown menu and selecting the desired tab with just one click. Mh, what a pain in the buns!

The default behavior is like this. One click on the tab item = dropdown menu opened

![Bootstrap](https://dl.dropboxusercontent.com/u/1889847/bootstrap1.png "Bootstrap dropdown menu")


 Why not letting the user open the dropdown menu only when he/she needs to change the item already chosen before (or selected by default)? Plus, why not showing the item selected directly in the tab description?

Well, this is exactly what this plugin aims to do, with very few changes in the bootstrap code we used for creating tabs and dropdown tabs everyday. This means that you can use this plugin without any worry in old projects as well!

Setup
-----
After including jquery and bootstrap, you'll need to include the code on your page.
Include the code on your page with a normal JavaScript script include, like so:

	<script type="text/javascript" src="bootDropTab.js">	

and make sure to include jquery and bootstrap before this.

Next, you'll have to add a typical dropdown item among your bootstrap tab items, with little additional class and elements code:

	<ul class="nav nav-tabs">
	  <li class="active"><a href="#home" class="ntd">Home</a></li>
	  <li><a href="#profile" class="ntd">Profile</a></li>
	  <li><a href="#messages" class="ntd">Messages</a></li>
	  <li><a href="#settings" class="ntd">Settings</a></li>
	  <li class="dropdown bootDropTab">
	  	<a href="#" class="contentTab dropdown-toggle">Check this out (<span class="tabsel"></span>) <span class="crtOpenDrop">▾</span></a>
	  	<ul class="dropdown-menu">
	  		<li><a href="#dr1" data-toggle="tab" class="subtab nxt">Drop1</a></li>
	  		<li><a href="#dr2" data-toggle="tab" class="subtab prv">Drop2</a></li>
	  	</ul>
	  </li>
	</ul>
	 
	<div class="tab-content">
	  <div class="tab-pane active" id="home">1</div>
	  <div class="tab-pane" id="profile">2</div>
	  <div class="tab-pane" id="messages">3</div>
	  <div class="tab-pane" id="settings">4</div>
	  <div class="tab-pane" id="dr1">dr1</div>
	  <div class="tab-pane" id="dr2">dr2</div>
	</div>

the dropdown `li` item we want to enhance will need the class `bootDropTab` as well as the classic `dropdown` one. Take a look to the inner elements of the `li.dropdown`:

- the `a.dropdown-toggle` will get an addictional class `contentTab`
- Inside the `a.dropdown-toggle` we can spot a `span.tabsel`: this span is actualized with the description of the dropdown item  we'll select (or the first one after running the plugin). It's not complimentary but enjoy using it if you need it
- the presence of `span.crtOpenDrop` is mandatory in order to trigger the opening of the dropdown menu. Without this element, we'll only be able to open the first dropdown item, selected as the default one. In other words, without this element the plugin is kind of useless!

Finally, we got to call our plugin only on the dropdown tabs we want to behave differently. In this example will be something like this:

	$("li.bootDropTab").dropTab();

`$fn.dropTab()` accepts as a parameter a function in order to disable "click handlers" already registered on the `a dropdown-toggle` we're dropTabbing. This is sometimes needed in order to make the plugin run smoothly, for example when we define a function to open the rest of the tabs, in place of the `data-toggle="tab"` html-notation:

	var funClick= function (e) {
		e.preventDefault();
		$(this).tab('show');
	};

	$("#myTab a").click(funClick);

	$("ul.nav-tabs a").dropTab(funClick);

in this case we erroneously call `.tab("show")` on our dropdown item as well, and because of this the plugin will stop working properly. On the other hand, a call like that is fairly convenient. The solution is passing that `funClick` function along with the plugin initialization call:

	$("li.bootDropTab").dropTab(funClick);

the listener will be removed for `li.bootDropTab` and everything will work smoothly.
