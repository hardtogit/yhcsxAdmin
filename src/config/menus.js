export default [
  {
    title: '首页',
    key: 'home',
    name: 'home',
    path: '/home',
    icon: 'home',
    children:[{
      title: 'banner管理',
      key: 'homeBanner',
      name: 'homeBanner',
      path: '/home/banner'
      // icon: 'picture'
    },{
      title: '视频管理',
      key: 'homeVideo',
      name: 'homeVideo',
      path: '/home/video'
      // icon: 'picture'
    },{
      title: '公司介绍',
      key: 'homeCompany',
      name: 'homeCompany',
      path: '/home/company'
      // icon: 'profile'
    },{
      title: '全国布局',
      key: 'homeMap',
      name: 'homeMap',
      path: '/home/map'
      // icon: 'profile'
    },{
      title: '合作伙伴',
      key: 'homePartner',
      name: 'homePartner',
      path: '/home/partner'
      // icon: 'profile'
    },{
      title: '加入我们',
      key: 'homeJoin',
      name: 'homeJoin',
      path: '/home/join'
      // icon: 'profile'
    },{
      title: '服务号二维码',
      key: 'homeQrCode',
      name: 'homeBanner',
      path: '/home/qrCode'
      // icon: 'profile'
  }]
  },
  {
    title: '公司介绍',
    key: 'company',
    name: 'company',
    path: '/company',
    icon: 'project',
    children:[{
      title: 'banner设置',
      key: 'companyBanner',
      name: 'companyBanner',
      path: '/company/banner'
      // icon: 'picture'
    },{
      title: '企业介绍',
      key: 'companyIntroduce',
      name: 'companyIntroduce',
      path: '/company/introduce'
      // icon: 'profile'
    },{
      title: '公司荣誉',
      key: 'companyHonor',
      name: 'companyHonor',
      path: '/company/honor'
      // icon: 'profile'
    },{
      title: '发展历程',
      key: 'companyHistory',
      name: 'companyHistory',
      path: '/company/history'
      // icon: 'profile'
    },{
      title: '底部banner设置',
      key: 'companyBomBanner',
      name: 'companyBomBanner',
      path: '/company/bomBanner'
      // icon: 'profile'
    }]
  },
  {
    title: '工厂介绍',
    key: 'factory',
    name: 'factory',
    path: '/factory',
    icon: 'inbox',
    children: [{
      title: 'banner设置',
      key: 'factoryBanner',
      name: 'factoryBanner',
      path: '/factory/banner'
      // icon: 'profile'
    },{
      title: '工厂总介绍',
      key: 'factoryIntroduce',
      name: 'factoryIntroduce',
      path: '/factory/introduce'
      // icon: 'profile'
    },{
      title: '工厂管理',
      key: 'factoryManage',
      name: 'factoryManage',
      path: '/factory/manage'
      // icon: 'profile'
    },{
      title: '新增工厂',
      key: 'factoryCreate',
      name: 'factoryCreate',
      path: '/factory/manage/create',
      hidden:true
      // icon: 'profile'
    },{
      title: '工厂详情',
      key: 'factoryDetail',
      name: 'factoryDetail',
      path: '/factory/manage/detail',
      hidden:true
      // icon: 'profile'
    }]
  },
  {
    title: '新闻资讯',
    key: 'news',
    name: 'news',
    path: '/news',
    icon: 'read',
    children: [{
      title: 'banner设置',
      key: 'newsBanner',
      name: 'newsBanner',
      path: '/news/banner'
      // icon: 'profile'
    },{
      title: '新闻管理',
      key: 'newsManage',
      name: 'newsManage',
      path: '/news/manage'
      // icon: 'profile'
    }]
  },
  {
    title: '合作伙伴',
    key: 'partner',
    name: 'partner',
    path: '/partner',
    icon: 'team',
    children: [{
      title: 'banner设置',
      key: 'partnerBanner',
      name: 'partnerBanner',
      path: '/partner/banner'
      // icon: 'profile'
    },{
      title: '服务客户',
      key: 'partnerServer',
      name: 'partnerServer',
      path: '/partner/server'
      // icon: 'profile'
    },{
        title: '供应商管理',
        key: 'newsSupply',
        name: 'newsSupply',
        path: '/partner/supply'
        // icon: 'profile'
      },{
      title: '新增服务客户',
      key: 'partnerServerCreate',
      name: 'partnerServerCreate',
      path: '/partner/server/create',
      hidden:true
      // icon: 'profile'
    },{
      title: '新增供应商',
      key: 'partnerSupplyCreate',
      name: 'partnerSupplyCreate',
      path: '/partner/supply/create',
      hidden:true
      // icon: 'profile'
    }]
  },
  {
    title: '洽淡合作',
    key: 'talk',
    name: 'talk',
    path: '/talk',
    icon: 'share-alt',
    children: [{
      title: 'banner设置',
      key: 'talkBanner',
      name: 'talkBanner',
      path: '/talk/banner'
      // icon: 'profile'
    },{
      title: '客户须知',
      key: 'talkClient',
      name: 'talkClient',
      path: '/talk/client'
      // icon: 'profile'
    },{
      title: '洽谈联系人',
      key: 'talkContacts',
      name: 'talkContacts',
      path: '/talk/contacts'
      // icon: 'profile'
    }]
  },
  {
    title: '加入我们',
    key: 'join',
    name: 'join',
    path: '/join',
    icon: 'usergroup-add',
    children: [{
      title: 'banner设置',
      key: 'joinBanner',
      name: 'joinBanner',
      path: '/join/banner'
      // icon: 'profile'
    },{
      title: '头部图片',
      key: 'joinHeader',
      name: 'joinHeader',
      path: '/join/header'
      // icon: 'profile'
    },{
      title: '面试注意事项',
      key: 'joinRemark',
      name: 'joinRemark',
      path: '/join/remark'
    },
      {
      title: '分公司',
      key: 'joinCompany',
      name: 'joinCompany',
      path: '/join/company'
      // icon: 'profile'
    }]
  }
];

