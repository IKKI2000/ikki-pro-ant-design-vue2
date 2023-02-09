import Vue from 'vue';
import {
    Affix,
    Alert,
    Anchor,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    // ColorPicker,
    Comment,
    ConfigProvider,
    DatePicker,
    Descriptions,
    Divider,
    Drawer,
    Dropdown,
    Empty,
    Form,
    FormModel,
    Icon,
    Input,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    Mentions,
    Menu,
    Message,
    Modal,
    Notification,
    PageHeader,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Result,
    Row,
    Select,
    Skeleton,
    Slider,
    Space,
    Spin,
    Statistic,
    Steps,
    Switch,
    Table,
    Tabs,
    Tag,
    Timeline,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    TreeSelect,
    Upload,
} from 'ant-design-vue';

Vue.use(Affix);
Vue.use(Alert);
Vue.use(Anchor);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(BackTop);
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(Collapse);
// Vue.use(ColorPicker);
Vue.use(Comment);
Vue.use(ConfigProvider);
Vue.use(DatePicker);
Vue.use(Descriptions);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(Empty);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(LocaleProvider);
Vue.use(Mentions);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(PageHeader);
Vue.use(Pagination);
Vue.use(Popconfirm);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Rate);
Vue.use(Result);
Vue.use(Row);
Vue.use(Select);
Vue.use(Skeleton);
Vue.use(Slider);
Vue.use(Space);
Vue.use(Spin);
Vue.use(Statistic);
Vue.use(Steps);
Vue.use(Switch);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Timeline);
Vue.use(TimePicker);
Vue.use(Tooltip);
Vue.use(Transfer);
Vue.use(Tree);
Vue.use(TreeSelect);
Vue.use(Upload);

Vue.prototype.$message = Message;
Vue.prototype.$success = Modal.success;
Vue.prototype.$info = Modal.info;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$error = Modal.error;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;
Vue.prototype.$notification = Notification;

Message.config({
    top: '15%',
    duration: 3,
    maxCount: 3,
});
Notification.config({
    placement: 'bottomRight',
    duration: 3,
});
