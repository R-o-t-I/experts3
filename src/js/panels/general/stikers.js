import React from 'react';
import {connect} from 'react-redux';

import {goBack, setPage} from '../../store/router/actions';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Div
} from '@vkontakte/vkui';

import odin from '../../../img/Stikery/1.png';
import st2 from '../../../img/Stikery/2.png';
import st3 from '../../../img/Stikery/3.png';
import st4 from '../../../img/Stikery/4.png';
import st5 from '../../../img/Stikery/5.png';
import st6 from '../../../img/Stikery/6.png';
import st7 from '../../../img/Stikery/7.png';
import st8 from '../../../img/Stikery/8.png';
import st9 from '../../../img/Stikery/10из10.png';
import st10 from '../../../img/Stikery/ВокругШум.png';
import st11 from '../../../img/Stikery/Гений.png';
import st12 from '../../../img/Stikery/ГлавРед.png';
import st13 from '../../../img/Stikery/Журналист.png';
import st14 from '../../../img/Stikery/Казанова.png';
import st15 from '../../../img/Stikery/Киборг1.png';
import st16 from '../../../img/Stikery/Киборг2.png';
import st17 from '../../../img/Stikery/Копирайтер.png';
import st18 from '../../../img/Stikery/Олдфаг.png';
import st19 from '../../../img/Stikery/ПочетИУважение.png';
import st20 from '../../../img/Stikery/Продюсер.png';
import st21 from '../../../img/Stikery/Профи.png';
import st22 from '../../../img/Stikery/Сжечь2.png';
import st23 from '../../../img/Stikery/Сжечь3.png';
import st24 from '../../../img/Stikery/ТыПытался.png';
import st25 from '../../../img/Stikery/ЦарьВоДворца.png';

import profi from '../../../img/Achievement/profi.png';
import oldfag from '../../../img/Achievement/oldfag.png';
import bender_1 from '../../../img/Achievement/bender_1.png';
import bender_2 from '../../../img/Achievement/bender_2.png';
import ty_pytalsya from '../../../img/Achievement/ty_pytalsya.png';
import prodyusser from '../../../img/Achievement/prodyusser.png';
import kazanova from '../../../img/Achievement/kazanova.png';
import vokrug_shum from '../../../img/Achievement/vokrug_shum.png';
import eto_shedevr from '../../../img/Achievement/eto_shedevr.png';
import tsar_vo_dvortsa from '../../../img/Achievement/tsar_vo_dvortsa.png';
import szhech_ikh_vsekh_2 from '../../../img/Achievement/szhech_ikh_vsekh_2.png';
import szhech_ikh_vsekh_3 from '../../../img/Achievement/szhech_ikh_vsekh_3.png';
import geniy from '../../../img/Achievement/geniy.png';
import pochet_i_uvazhenie from '../../../img/Achievement/pochet_i_uvazhenie.png';
import kopirayter from '../../../img/Achievement/kopirayter.png';
import zhurnalist from '../../../img/Achievement/zhurnalist.png';
import boss from '../../../img/Achievement/boss.png';

class StikersPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {id, goBack, setPage} = this.props;

return (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
            Стикеры
        </PanelHeader>
           <Group>
                <Div>
                    Дают за <b>вступление в программу Экспертов ВКонтакте</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={odin} />
                        <img className="stikers-img" src={st2} />
                    </div>
                </Div>
                <Div>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st3} />
                        <img className="stikers-img" src={st4} />
                    </div>
                </Div>
                <Div>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st5} />
                        <img className="stikers-img" src={st6} />
                    </div>
                </Div>
                <Div>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st7} />
                        <img className="stikers-img" src={st8} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"10 из 10"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st9} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={eto_shedevr} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Вокруг шум"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st10} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={vokrug_shum} />
                    </div>
                </Div>

                <Div>
                    Дают за достижение <b>"Гений"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st11} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={geniy} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Главный редактор"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st12} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={boss} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Журналист"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st13} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={zhurnalist} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Казанова"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st14} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={kazanova} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Киборг 1 уровня"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st15} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={bender_1} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Киборг 2 уровня"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st16} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={bender_2} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Копирайтер"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st17} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={kopirayter} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Олдфаг"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st18} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={oldfag} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Почет и уважение"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st19} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={pochet_i_uvazhenie} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Продюсер"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st20} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={prodyusser} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Профи"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st21} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={profi} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Сжечь их всех 2"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st22} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={szhech_ikh_vsekh_2} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Сжечь их всех 3"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st23} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={szhech_ikh_vsekh_3} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Ты пытался"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st24} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={ty_pytalsya} />
                    </div>
                </Div>
                <Div>
                    Дают за достижение <b>"Царь во дворца"</b>
                    <div className="stikers-block">
                        <img className="stikers-img" src={st25} />
                        <img onClick={() => setPage('general', 'achievments')} className="achivments-stikers-img" src={tsar_vo_dvortsa} />
                    </div>
                </Div>
           </Group>
        </Panel>
        );
    }
}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(StikersPanelBase);