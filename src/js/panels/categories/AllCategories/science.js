import React from 'react';

import {setPage, openPopout, closePopout, goBack} from "../../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    CellButton,
    Placeholder,
    RichCell,
    Avatar,
    Button,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../functions/query_get.jsx';

import {
    Icon28BugOutline,
    Icon28GhostSimleOutline
} from '@vkontakte/icons';

class SciencePanelBase extends React.Component {
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
            Наука
        </PanelHeader>
        <Group>
            <Placeholder
                icon={<Icon28GhostSimleOutline width={60} height={60}/>}
                action={<Link href="https://vk.me/skreglis" target="_blank">Пишите нам!</Link>}
            >
                Контента нет, но вы держитесь.
				<br></br><br></br>Вы представитель тематики? Хотите добавить что-то сюда?
            </Placeholder>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/21" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел наука."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://static.wixstatic.com/media/54bb82_23f5dad7baa942818b26a2688e255e18~mv2.gif)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 80,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/21" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1d90MORbY0Se9Ihv1hiRy" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Наука
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

export default connect(null, mapDispatchToProps)(SciencePanelBase);