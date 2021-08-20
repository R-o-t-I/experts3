import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../../../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    CellButton,
    RichCell,
    Avatar,
    Button,
    Div,
    ContentCard,
    Banner,
    Group
} from '@vkontakte/vkui';

import queryGet from '../../../../../functions/query_get.jsx';

import {
    Icon28BugOutline
} from '@vkontakte/icons';

class ArtPanelBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {
        id,
        setPage,
        goBack
    } = this.props;

return (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
            Арт
        </PanelHeader>
        <Group>
            <Div onClick={() => setPage('categories', 'assessmentRulesArt')}>
                <ContentCard
                    image="https://sun9-1.userapi.com/impg/c858120/v858120827/1a6934/-XtFdDYZ9NU.jpg?size=2560x256&quality=96&sign=2366969e034f5ff661b717220a74f6a9&type=album"
                    header="Правила оценки постов"
                    text="Тут Вы узнаете что стоит поднимать, а что нет."
                    maxHeight={150}
                    className="text"
                />
            </Div>
            <Div onClick={() => setPage('categories', 'chatRulersArt')}>
                <ContentCard
                    image=""
                    header="Правила беседы"
                    text="У каждой официальной беседы есть свои правила, они нужны для поддержания порядка."
                    maxHeight={150}
                    className="text"
                />
            </Div>
            <Div onClick={() => setPage('categories', 'faqExpertArt')}>
                <ContentCard
                    image="https://sun9-70.userapi.com/impg/c857228/v857228979/a8715/1nOXiENuHYo.jpg?size=2560x256&quality=96&sign=cc2d811822475d09e43c971e193b333b&type=album"
                    header="Часто задаваемые вопросы"
                    text="Многие задают вопросы про рейтинг, достижения и в целом о системе экспертов. Тут Вы найдете многие ответы."
                    maxHeight={150}
                    className="text"
                />
            </Div>
            {
                (queryGet('vk_platform') === 'mobile_android'
                || queryGet('vk_platform') === 'mobile_iphone'
                || queryGet('vk_platform') === 'mobile_ipad') && (
            <Link href="https://vk.com/discover?id=discover_category_full/1" target="_blank">
            <Banner
                mode="image"
                header="Модерируемый раздел"
                subheader="Тут Вы можете сразу перейти в раздел арт."
                background={
                <div
                    style={{
                    backgroundColor: '#9cb8a0', 
                    backgroundImage: 'url(https://media1.giphy.com/media/dYfC1APcnGauBlJcpH/giphy.gif)',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 80,
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                }
                actions={<Button mode="overlay_primary"><Link href="https://vk.com/discover?id=discover_category_full/1" target="_blank" style={{color: "#000000"}}>Открыть</Link></Button>}
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
                    <Link href="https://vk.me/join/AJQ1d0RsHBYCRIR_PrZwO3PJ" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты ВКонтакте | Арт
            </RichCell>
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-34.userapi.com/impg/C_mKMnWyVBT42wjAnd_GHFc2okuuQfsUYPFMLQ/HchEKGEMyIo.jpg?size=2160x2160&quality=96&sign=02d12dca34f3a83c3db00631e0543602&type=album" />}
                caption="Неофициальное сообщество"
                actions={
                    <React.Fragment>
                    <Link href="https://vk.com/club190570695" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </React.Fragment>
                }
            >
                Эксперты: Арт
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

export default connect(null, mapDispatchToProps)(ArtPanelBase);