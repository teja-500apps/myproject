import Vue from 'vue'
import Router from 'vue-router'
//import Helloworld from '../components/HelloWorld'
//import New from '../components/14-04-2022/test2'
import Sai from '../components/14-04-2022/test3'
// import Siri from '../components/14-04-2022/test4'
// import TejA from '../components/14-04-2022/test5'
import prop from '../components/18-04-2022/prop2'
// import KrishnA from '../components/18-04-2022/card6'
import Avenger from '../components/19-04-2022/data'
//import KovurU from '../components/19-04-2022/axios'
import KisN from '../components/13-04-2022/bform'
import LakH from '../components/20-04-2022-assignment/my'
import MadH from '../components/20-04-2022-assignment/mytable'
import IndI from '../components/20-04-2022-assignment/my1'
//import BhA from '../components/20-04-2022-assignment/my2'
//import QuE from '../components/20-04-2022-assignment/my3'
import AuE from '../components/20-04-2022-assignment/my4'
import GeU from '../components/21-04-2022/my5'
import test from '../components/test'
import SeP from '../components/21-04-2022/my6'
//import Suv from '../components/21-04-2022/my7'
import SkT from '../components/21-04-2022/my8'
import KtS from '../components/21-04-2022/foreach'
import KtM from '../components/22-04-2022/Axios'
import RnG from '../components/22-04-2022/Promise'
import SkY from '../components/25-04-2022/test1'
import NqT from '../components/25-04-2022/test2'
import SqT from '../components/25-04-2022/test6'
import EmN from '../components/25-04-2022/test7'
import NvY from '../components/25-04-2022/test8'
import MvY from '../components/25-04-2022/test10'
import SvY from '../components/25-04-2022/test4'
import MkT from '../components/25-04-2022/test5'
import MqC from '../components/25-04-2022/test9'
import AsK from '../components/26-04-2022/Q1'
import GsY from'../components/26-04-2022/Q2'
import KgF from '../components/26-04-2022/Q3'
import MsY from '../components/26-04-2022/Q4'
import StU from '../components/26-04-2022/Q5'
//import MnS from '../components/26-04-2022/Q6'
import JsK from '../components/27-204-2022/boot'
import WsK from '../components/28-04-2022/Qa1'
import LsK from '../components/28-04-2022/Qb2'
import BgY from '../components/28-04-2022/Qc3'
import ArY from '../components/29-04-2022/MinE'
import FgR from '../components/03-05-2022/F3'
import GmR from '../components/03-05-2022/F7'
import Q5R from '../components/03-05-2022/F5'
import Q4R from '../components/03-05-2022/F4'
import Q8R from '../components/03-05-2022/F8'
//import Q6R from '../components/03-05-2022/F6'
import Q9R from '../components/03-05-2022/F9'
import Q10R from '../components/03-05-2022/F10'
import C1R from '../components/04-05-2022/Crud'
import M2C from '../components/05-05-2022/T1'
import M3C from '../components/05-05-2022/T2'
import M4C from '../components/05-05-2022/col'
import M5C from '../components/06-05-2022/tab'
import M6C from '../components/06-05-2022/tab2'
import M7C from '../components/09-05-2022/T'
import M8C from '../components/09-05-2022/S1'
import M9C from '../components/10-05-2022/p'
import M10C from '../components/10-05-2022/WaT'
import M11C from '../components/11-05-2022/SaI'
import M12C from '../components/10-05-2022/QQ4'







Vue.use(Router)
const routes = [
    
    {
        path: '/test3',
        name: "test3",
        component: Sai
    },

    {
        path: '/data',
        name: "data",
        component: Avenger
    },
    {
        path: '/prop2',
        name: "prop2",
        component: prop
    },
    {
        path: '/test',
        name: "test",
        component: test
    },
    {
        path: '/bform',
        name: "bform",
        component: KisN
    },
    {
        path: '/my',
        name: "my",
        component: LakH
    },
    {
        path: '/mytable',
        name: "mytable",
        component: MadH
    },

    {
        path: '/my1',
        name: "my1",
        component:IndI
    },

    {
        path: '/my4',
        name: "my4",
        component: AuE
    },
    {
        path: '/my5',
        name: "my5",
        component: GeU
    },

    {
        path: '/my6',
        name: "my6",
        component:SeP

    },
    {
        path: '/my8',
        name: "my8",
        component: SkT
    },
    {
        path: '/foreach',
        name: "foreach",
        component: KtS
    },
    {
        path: '/Axios',
        name: "Axios",
        component: KtM
    },
    {
        path: '/Promise',
        name: "promise",
        component: RnG
    },
    {
        path:'/test1',
        name: "test1",
        component: SkY
    },
    {
        path: '/test2',
        name: "test2",
        component: NqT
    },
    {
        path: '/test6',
        name: "test6",
        component: SqT
    },
    {
        path: '/test7',
        name: "test7",
        component: EmN
    },
    {
        path: '/test8',
        name: "/test8",
        component: NvY
    },
    {
        path: '/test10',
        name: "/test10",
        component: MvY
    },
    {
        path: '/test4',
        name: "/test4",
        component: SvY
    },
    {
        path: '/test5',
        name: "/test5",
        component: MkT
    },
    {
        path: '/test9',
        name: "/test9",
        component: MqC
    },
    {
        path: '/Q1',
        name: "/Q1",
        component: AsK
     },
     {
        path:'/Q2',
        name: "Q2",
        component: GsY
    },
    {
        path: '/Q3',
        name: "/Q3",
        component: KgF
    },

    {
        path: '/Q4',
        name: "/Q4",
        component: MsY
    },
    {
        path: '/Q5',
        name: "/Q5",
        component: StU
    },
    // {
    //     path: '/Q6',
    //     name: "/Q6",
    //     component: MnS
    // },
    {
        path: '/boot',
        name: "boot",
        component: JsK
    },
    {
        path: '/Qa1',
        name: "Qa1",
        component: WsK
    },
    {
        path: '/Qb2',
        name: "Qb2",
        component: LsK
    },

    {
        path: '/Qc3',
        name: "Qc3",
        component: BgY
    },
    {
        path: '/MinE',
        name: "MinE",
        component: ArY
    },
    {
        path: '/F3',
        name: "F3",
        component: FgR
    },
    {
        path: '/F7',
        name: "F7",
        component: GmR
    },
    {
        path: '/F5',
        name: "F5",
        component: Q5R
    },
    {
        path: '/F4',
        name: "F4",
        component: Q4R
    },
    {
        path: '/F8',
        name: "F8",
        component: Q8R
    },
    // {
    //     path: '/F6',
    //     name: "F6",
    //     component: Q6R
    // },
    {
        path: '/F9',
        name: "F9",
        component: Q9R
    },
    {
        path: '/F10',
        name: "F10",
        component: Q10R
    },
    {
        path: '/Crud',
        name: "Crud",
        component: C1R
    },
    {
        path: '/T1',
        name: "T1",
        component: M2C
    },
    {
        path: '/T2',
        name: "T2",
        component: M3C
    },
    {
        path: '/col',
        name: "col",
        component: M4C
    },
    {
        path: '/tab',
        name: "tab",
        component: M5C
    },
    {
        path: '/tab2',
        name: "tab2",
        component: M6C
    },
    {
        path: '/T',
        name: "T",
        component: M7C
    },
    {
        path: '/S1',
        name: "S1",
        component: M8C
    },
    {
        path: '/p',
        name: "p",
        component: M9C
    },
    {
        path: '/WaT',
        name: "WaT",
        component: M10C
    },
    {
        path: '/SaI',
        name: "SaI",
        component: M11C
    },
    {
        path: '/QQ4',
        name: "QQ4",
        component: M12C
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
]
let router = new Router({ routes })
export default router