<template>
    <a-config-provider :locale="$i18n.messages[$i18n.locale]">
        <div id="ikki">
            <a-spin :spinning="$store.state.loading" :tip="$t('Common.Loading')" :delay="200">
                <router-view />
            </a-spin>
        </div>
    </a-config-provider>
</template>

<script>
    export default {
        name: 'IKKIView',
    };
</script>

<style lang="less">
    #ikki {
        height: 100%;
        > .ant-spin-nested-loading {
            width: 100%;
            height: 100%;
            .ant-spin {
                max-height: 100%;
                .ant-spin-dot {
                    margin: -60px -36px -36px -36px;
                    width: 1.2em;
                    height: 1.2em;
                    font-size: 64px;
                    .ant-spin-dot-item {
                        width: 32px;
                        height: 32px;
                    }
                }
                .ant-spin-text {
                    padding-top: 36px;
                    font-size: 24px;
                    text-shadow: none;
                }
            }
            .ant-spin-container {
                height: 100%;
            }
        }
    }
    #nprogress {
        .bar {
            height: 3px !important;
            background: @primary-color !important;
            .peg {
                box-shadow: 0 0 10px @primary-color, 0 0 5px @primary-color;
            }
        }
        .spinner {
            top: 8px !important;
            right: 8px !important;
            .spinner-icon {
                border-top-color: @primary-color;
                border-left-color: @primary-color;
                width: 12px;
                height: 12px;
            }
        }
    }
</style>
