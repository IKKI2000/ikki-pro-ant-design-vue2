<template>
    <a-config-provider :locale="$i18n.messages[$i18n.locale]">
        <div id="app">
            <a-spin :spinning="$store.state.loading" :tip="$t('Common.Loading')" :delay="200">
                <nav>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </nav>
                <router-view />
            </a-spin>
        </div>
    </a-config-provider>
</template>

<script>
    export default {
        name: 'AppView',
    };
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
