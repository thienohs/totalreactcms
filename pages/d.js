export default () => (
    <div data-jc="exec,binder,modificator">
        <Head>
            {/* <title>This is react</title> */}
            {/* <link href="/node_modules/normalize.css/normalize.css" rel="stylesheet" /> */}
            {/* <link href="/css/blueprint-icons.css" rel="stylesheet" />
            <link href="/css/blueprint.css" rel="stylesheet" /> */}
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=10" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta name="robots" content="all,follow" />
            <link rel="stylesheet" href="//cdn.componentator.com/spa.min@14.css" />
            <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,700" />
            <link rel="stylesheet" href="@{global.css}" />
            <script src="//cdn.componentator.com/spa.min@14.js"></script>
            {"@{import('meta', 'head', 'default.css', 'default.js', 'favicon.ico')}"}
            {/* <link type="text/css" rel="stylesheet" href="/default/css/default.css" />
            <script src="/default/js/default.js"/>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/> */}
            <script>var LOGGED = +'{'@{if user}'}1{'@{else}0'}{'@{fi}'}';</script>
        </Head>
        {/* <Button intent="success" text="This is react (Styled by blueprint)" onClick={()=>{}} /> */}
        <div data-jc="loading" class="ui-loading@{if !repository.loading} hidden@{fi}"></div>
        <div data-jc="shoppingcart" data-jc-path="shoppingcart" data-jc-config="discount:@{if user}@{user.discount}@{else}0@{fi}"></div>
        <div data-jc="message" data-jc-config="button:@(Close)"></div>
        <div data-jc="autocomplete"></div>

        <div class="container">

            <div class="relative">
                <div class="account">
                    {'@{if user}'}
                        <a href="@{sitemap_url('account')}" class="b">{'@{user.name}'}</a>
                        <a href="@{sitemap_url('settings')}"><i class="fa fa-cog"></i>@(Settings)</a>
                        <a href="@{sitemap_url('logoff')}"><i class="fa fa-sign-out"></i>@(Sign out)</a>
                    {'@{else}'}
                        {/* <a href="@{sitemap_url('account')}"><i class="fa fa-lock"></i>@(Sign in)</a> */}
                        <Button icon="log-in" minimal="true" intent="success" text="@(Sign in)" onClick={()=>{}} />
                    {'@{fi}'}
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <section class="categories">
                        <a href="/" class="logo"><img src="/img/logo.png" alt="@{'%name'}" border="0" /></a>
                        <div class="categoriescontainer">
                            <div class="categoriesbody bg-yellow fs12 ui-center m">
                                This is a new version of new <b>Total.js Eshop</b>. This version will be available soon for all Total.js members.
                            </div>

                            <div class="categoriesbody npb">
                                <div class="caption">@(We recommend)</div>
                            </div>
                            <nav>
                                {'@{foreach m in F.global.navigations.panel.children}'}
                                    <a href="@{m.url}"><i class="fa fa-caret-right"></i>{'@{m.name}'}</a>
                                {'@{end}'}
                                <a href="@{sitemap_url('new')}"><i class="fa fa-caret-right"></i>@(New goods)</a>
                                <a href="@{sitemap_url('top')}"><i class="fa fa-caret-right"></i>@(Top products)</a>
                                <a href="@{sitemap_url('popular')}"><i class="fa fa-caret-right"></i>@(Popular products)<span>@(NEW)</span></a>
                                <a href="@{sitemap_url('category')}"><i class="fa fa-caret-right"></i>@(All products)</a>
                            </nav>
                            <div class="categoriesbody npb">
                                <div class="caption">@(Categories)</div>
                            </div>
                            {'@{view("partials/categories")}'}
                        </div>
                        <button id="mainmenu"><i class="fa fa-chevron-down"></i></button>
                    </section>
                </div>
                <div class="col-md-9">
                    <section class="body">

                        <header>
                            <nav>
                                {'@{foreach m in F.global.navigations.menu.children}'}
                                    <a href="@{m.url}">{'@{if m.icon}<i class="fa fa-@{m.icon}"></i>@{fi}@{m.name}'}</a>
                                {'@{end}'}
                                <Menu>
                                    <MenuItem text="Submenu">
                                        <MenuItem text="Child one" />
                                        <MenuItem text="Child two" />
                                        <MenuItem text="Child three" />
                                    </MenuItem>
                                </Menu>
                            </nav>
                            <div class="shoppingcart" data-m="shoppingcart.sum + shoppingcart">
                                <a href="@{sitemap_url('checkout')}"><b data-b="shoppingcart.sum" data-b-html="'@{global.config.currency_entity}'.format(value ? value.format(2) : (0).format(2))">...</b><span>@(Your shopping cart)</span></a>
                            </div>
                            <form class="search" action="@{sitemap_url('category')}" method="get">
                                <button><i class="fa fa-search"></i></button>
                                <div><input type="text" placeholder="@(Search products ...)" name="q" value="@{query.q}" id="search" autocomplete="off" /></div>
                            </form>
                        </header>

                        <nav class="breadcrumb">
                            {'@{foreach m in sitemap()}'}
                                {'@{if m.id === "category"}'}
                                    <i class="fa fa-caret-right"></i><a href="@{m.url}">{'@{m.name}'}</a>
                                {'@{else}'}
                                    <i class="fa fa-caret-right"></i><a href="@{m.url}">{'@{m.name}'}</a>
                                {'@{fi}'}
                            {'@{end}'}
                        </nav>
                        {'@{body}'}
                    </section>
                </div>
            </div>
        </div>
        <br />
        <br />
        <script src="@{global.js}"></script>
    </div>
)