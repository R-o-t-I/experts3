import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../store/router/actions";
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Div
} from '@vkontakte/vkui';

import freshmen from '../../../img/Achievement/freshmen.png';
import profi from '../../../img/Achievement/profi.png';
import oldfag from '../../../img/Achievement/oldfag.png';
import bender_1 from '../../../img/Achievement/bender_1.png';
import bender_2 from '../../../img/Achievement/bender_2.png';
import ty_pytalsya from '../../../img/Achievement/ty_pytalsya.png';
import prodyusser from '../../../img/Achievement/prodyusser.png';
import kazanova from '../../../img/Achievement/kazanova.png';
import vokrug_shum from '../../../img/Achievement/vokrug_shum.png';
import dvoynoe_popadanie from '../../../img/Achievement/dvoynoe_popadanie.png';
import eto_shedevr from '../../../img/Achievement/eto_shedevr.png';
import tsar_vo_dvortsa from '../../../img/Achievement/tsar_vo_dvortsa.png';
import szhech_ikh_vsekh_1 from '../../../img/Achievement/szhech_ikh_vsekh_1.png';
import szhech_ikh_vsekh_2 from '../../../img/Achievement/szhech_ikh_vsekh_2.png';
import szhech_ikh_vsekh_3 from '../../../img/Achievement/szhech_ikh_vsekh_3.png';
import terminator from '../../../img/Achievement/terminator.png';
import kritik from '../../../img/Achievement/kritik.png';
import geniy from '../../../img/Achievement/geniy.png';
import v_trende from '../../../img/Achievement/v_trende.png';
import marshrutka from '../../../img/Achievement/marshrutka.png';
import magikan from '../../../img/Achievement/magikan.png';
import pochet_i_uvazhenie from '../../../img/Achievement/pochet_i_uvazhenie.png';
import odin_v_pole_voin from '../../../img/Achievement/odin_v_pole_voin.png';
import kopirayter from '../../../img/Achievement/kopirayter.png';
import zhurnalist from '../../../img/Achievement/zhurnalist.png';
import boss from '../../../img/Achievement/boss.png';
import divanny_kritik from '../../../img/Achievement/divanny_kritik.png';

class AchievementsPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {id, goBack} = this.props;

return (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
            Достижения
        </PanelHeader>
           <Group>
                <Div>
                    <b>Фрешмен/Профи/Олдфаг:</b> вы нашли 10/100/1000 интересных записей. (Оценили вверх).
                    <div className="achievement-block">
                        <img className="achievement-img" src={freshmen} />
                        <img className="achievement-img" src={profi} />
                        <img className="achievement-img" src={oldfag} />
                    </div>
                </Div>
                <Div>
                    <b>Киборг (уровень 1, уровень 2):</b> вы голосовали за записи каждый день в течение недели (для уровня 1) или месяца (для уровня 2).
                    <div className="achievement-block">
                        <img className="achievement-img" src={bender_1} />
                        <img className="achievement-img" src={bender_2} />
                    </div>
                </Div>
                <Div>
                    <b>Ты пытался (уровень 1, уровень 2):</b> вы голосовали за записи 6 дней подряд, но на 7-й день решили отдохнуть (29 дней подряд, но на 30-й день перестали).
                    <div className="achievement-block">
                        <img className="achievement-img" src={ty_pytalsya} />
                        <img className="achievement-img" src={ty_pytalsya} />
                    </div>
                </Div>
                <Div>
                    <b>Продюсер:</b> вы помогли авторам собрать миллион охвата.
                    <br></br><em><b>4 балла</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={prodyusser} />
                    </div>
                </Div>
                <Div>
                    <b>Казанова:</b> вы помогли авторам собрать 100 000 отметок «Нравится».
                    <br></br><em><b>4 балла</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={kazanova} />
                    </div>
                </Div>
                <Div>
                    <b>Вокруг шум:</b> вы помогли авторам собрать 10 000 комментариев.
                    <br></br><em><b>5 баллов</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={vokrug_shum} />
                    </div>
                </Div>
                <Div>
                    <b>Двойное попадание:</b> вы получили две ачивки за один день.
                    <div className="achievement-block">
                        <img className="achievement-img" src={dvoynoe_popadanie} />
                    </div>
                </Div>
                <Div>
                    <b>10 из 10:</b> вы получили десять ачивок.
                    <div className="achievement-block">
                        <img className="achievement-img" src={eto_shedevr} />
                    </div>
                </Div>
                <Div>
                    <b>Царь во дворца:</b> вы — самый активный эксперт! Ачивка выдаётся раз в месяц, держится месяц.
                    <br></br><em><b>10 баллов</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={tsar_vo_dvortsa} />
                    </div>
                </Div>
                <Div>
                    <b>Сжечь их всех:</b> записи, за которые вы проголосовали, получили огонь Прометея (уровень 1 — 10 записей, уровень 2 — 50 записей, уровень 3 — 100 записей).
                    <br></br><em><b>-/2 балла/5 баллов</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={szhech_ikh_vsekh_1} />
                        <img className="achievement-img" src={szhech_ikh_vsekh_2} />
                        <img className="achievement-img" src={szhech_ikh_vsekh_3} />
                    </div>
                </Div>
                <Div>
                    <b>Терминатор:</b> с возвращением в ряды экспертов!
                    <div className="achievement-block">
                        <img className="achievement-img" src={terminator} />
                    </div>
                </Div>
                <Div>
                    <b>Критик:</b> из 100 записей лишь одну вы посчитали интересной. (99 оценок вниз и 1 вверх).
                    <div className="achievement-block">
                        <img className="achievement-img" src={kritik} />
                    </div>
                </Div>
                <Div>
                    <b>Гений:</b> ваш голос за запись совпал с голосом звезды! (Пользователь с галочкой).
                    <div className="achievement-block">
                        <img className="achievement-img" src={geniy} />
                    </div>
                </Div>
                <Div>
                    <b>В тренде:</b> в вашей тематике больше всего огненных записей! Ачивка временная, выдаётся раз в месяц. (Записи с огнем Прометея).
                    <div className="achievement-block">
                        <img className="achievement-img" src={v_trende} />
                    </div>
                </Div>
                <Div>
                    <b>Водитель маршрутки:</b> ваша тематика — самая многочисленная, в ней больше всего экспертов. Ачивка временная, выдаётся раз в месяц.
                    <div className="achievement-block">
                        <img className="achievement-img" src={marshrutka} />
                    </div>
                </Div>
                <Div>
                    <b>Последний из могикан:</b> ваша тематика — самая малочисленная. Ачивка временная, выдаётся раз в месяц.
                    <div className="achievement-block">
                        <img className="achievement-img" src={magikan} />
                    </div>
                </Div>
                <Div>
                    <b>Почёт и уважение:</b> вашу запись отметили другие эксперты.
                    <br></br><em><b>1 балл</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={pochet_i_uvazhenie} />
                    </div>
                </Div>
                <Div>
                    <b>Один в поле воин:</b> вы проголосовали против записи, которую одобрило большинство экспертов.
                    <div className="achievement-block">
                        <img className="achievement-img" src={odin_v_pole_voin} />
                    </div>
                </Div>
                <Div>
                    <b>Копирайтер/Журналист/Главный редактор</b> — месяц/полгода/год в команде экспертов.
                    <br></br><em><b>1 балл/2 балла/8 баллов</b></em>
                    <div className="achievement-block">
                        <img className="achievement-img" src={kopirayter} />
                        <img className="achievement-img" src={zhurnalist} />
                        <img className="achievement-img" src={boss} />
                    </div>
                </Div>
                <Div>
                    <b>Эксперт:</b> добро пожаловать в команду экспертов!
                    <div className="achievement-block">
                        <img className="achievement-img" src={divanny_kritik} />
                    </div>
                </Div>
           </Group>
        </Panel>
        );
    }
}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(AchievementsPanelBase);