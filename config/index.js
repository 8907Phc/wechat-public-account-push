export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx9a350492b25609f2",

    // 公众号APP_SECRET
    APP_SECRET: "b71bf1a87fe8e8158fa312a45f5b2753",

    // 模板消息id
    TEMPLATE_ID: "xuJyu_2d4Eci3Uo9P9COCpSEAqicm1RSOnXynHZ7tm4",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "osLlj6MvQE0h3GqvNwFPwbjGbl5s",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "张三",
    //   id: "wxafasdasdd-zxfvsdfd"
    // },
    // {
    //   name: "李四",
    //   id: "wxafasdasdd-zxfvsdfd"
    // }]
    USERS: [
      {name: '小彭', id: "osLlj6MvQE0h3GqvNwFPwbjGbl5s"}, 
      {name: '小侯', id: "osLlj6IKqaFup_gIWPqz01VA9PgA"},  
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '老彭',id: "osLlj6MvQE0h3GqvNwFPwbjGbl5s"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "北京",
    // 所在城市
    CITY: "北京",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "老婆", "year": "2002", "date": "01-29"},
      {"type": "节日", "name": "恋爱纪念日", "year": "2021", "date": "06-20"},
      {"type": "生日", "name": "老彭", "year": "2000", "date": "09-03"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-06-20",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
