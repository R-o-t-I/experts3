import React from 'react';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    CellButton,
    Div,
    Button,
    RichCell,
    Avatar,
    ContentCard,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import { Icon28BugOutline } from '@vkontakte/icons';

class MusicPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {
        id,
        goBack
    } = this.props;

return (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
            Музыка
        </PanelHeader>
        <Group>
            <Div>
                <Link href="https://vk.com/@exp_muz-gide" target="_blank">
                    <ContentCard
                        image="https://sun2.velcom-by-minsk.userapi.com/impf/HXnMp73Z8KihOo-64rV6YinCMJmRBv8NCL3xdA/EIGESz56cYo.jpg?size=1280x800&quality=96&sign=9750fa79de5bc82e117c241ac5e07848&type=album"
                        header="Рекомендации к оцениванию постов."
                        text="Привет, данная статья нацелена на то, чтобы вам было легче и удобнее ориентироваться в мире записей. А именно, мы поможем вам научиться определять, как оценивать ту или иную запись."
                        maxHeight={150}
                        className="text"
                    />
                </Link>
            </Div>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/16" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел музыка."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/12/10/00/16/cassette-4684688_960_720.png)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 80,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/16" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
            />
            </Link>
                )
            }
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-33.userapi.com/impf/c857436/v857436129/de57a/GA7nevF1K_I.jpg?size=1204x1200&quality=96&sign=20323a742f6e77e5c4db3c4bfe0b2d69&type=album" />}
                caption="Официальная беседа"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.me/join/AJQ1dzCvFRYKud924/6tMx82" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Музыка
            </RichCell>
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-22.userapi.com/impf/qXgsArlhR0M2vW_eJjToT5n4mrfF6SXD8qYmFg/473RveZ9AO0.jpg?size=926x617&quality=96&sign=0d33334653fb190a47c62afea18d22ab&type=album" />}
                caption="Неофициальное сообщество"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.com/exp_muz" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты VK | Музыка
            </RichCell>
            <Link href="https://vk.me/skreglis" target="_blank">
                <CellButton centered style={{marginBottom: 10, marginTop: 10}} before={<Icon28BugOutline />}>
                    Предложить исправление
                </CellButton>
            </Link>
        </Group>
        </Panel>
        );
    }
}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout,
    goBack
};

export default connect(null, mapDispatchToProps)(MusicPanelBase);