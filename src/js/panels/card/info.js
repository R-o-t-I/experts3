import React from 'react';
import PropTypes from 'prop-types';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";
import {connect} from 'react-redux';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Link,
    RichCell,
    Button,
    Avatar,
    Footer,
    Separator,
    Text,
    Div,
    Snackbar,
    Group
} from '@vkontakte/vkui';

import {
    Icon16SadFaceOutline
} from '@vkontakte/icons';

class InfoBase extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            snackbar: null
        };
        this.openBaseWithAction = this.openBaseWithAction.bind(this);
    }

    openBaseWithAction () {
        if (this.state.snackbar) return;
        this.setState({ snackbar:
            <Snackbar
                onClose={() => this.setState({ snackbar: null })}
                //action={<Link href="https://vk.com/skreglis" target="_blank">Написать разработчику</Link>}
                before={<Avatar size={24} style={{ background: 'var(--accent)' }}><Icon16SadFaceOutline fill="#fff" width={14} height={14} /></Avatar>}
            >
                <span onClick={() => this.eruda()}>Тут нет пасхалок ¯\_(ツ)_/¯</span>
            </Snackbar>
        });
    }

    eruda = async () => {
        await this.setState({eruda: !this.state.eruda})
        this.state.eruda ? window.eruda.init() : window.eruda.destroy()
    }

render () {
    const {
        id,
        goBack,
        fetchedUser
    } = this.props;

	return (
		<Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => goBack()}/>}
            >
                Информация
            </PanelHeader>
            <Group>
            <Div>
                <Text weight="regular" className="text">
                    Привет, Эксперт{fetchedUser &&<span> {`${fetchedUser.first_name}`}</span>}! Этот сервис создан командой SkyReglis Studio для помощи участникам программы "Эксперты ВКонтакте".
                </Text>
            </Div>
            <Link href="https://vk.com/public191809582" target="_blank">
            <RichCell
                disabled
                before={<Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album" />}
                caption="Разработчики"
                actions={
                    <div>
                    <Link href="https://vk.me/public191809582" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                    <Link href="https://vk.com/public191809582" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                SkyReglis Studio
            </RichCell>
            </Link>
            <Separator />
            <Link href="https://vk.com/vkexperts" target="_blank">
            <RichCell
                disabled
                before={<Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-33.userapi.com/impf/c857436/v857436129/de57a/GA7nevF1K_I.jpg?size=1204x1200&quality=96&sign=20323a742f6e77e5c4db3c4bfe0b2d69&type=album" />}
                caption="Официальное сообщество"
                actions={
                    <div>
                    <Link href="https://vk.me/vkexperts" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                    <Link href="https://vk.com/vkexperts" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                Эксперты ВКонтакте
            </RichCell> 
            </Link>
            <Separator />
            <Link href="https://vk.com/keksperts" target="_blank">
            <RichCell
                disabled
                before={<Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-32.userapi.com/impf/c854528/v854528074/24752c/8ikGrSh2NLY.jpg?size=1084x1080&quality=96&sign=046996978038e6d20cadffef37e6f5d7&type=album" />}
                caption="Юмористические материалы"
                actions={
                    <div>
                    <Link href="https://vk.me/keksperts" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                    <Link href="https://vk.com/keksperts" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                Контакты ВЭксперте
            </RichCell>
            </Link>
            <Separator />
            <Link href="https://vk.com/diexp" target="_blank">
            <RichCell
                disabled
                before={<Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-27.userapi.com/impg/_wfo1wWpN6PFMmtYvoRAzAY3yLJqO7zftU8NcA/bG4dAIEdhSU.jpg?size=807x807&quality=96&sign=1cd83aebaebc35a98c22126eb23e5645&type=album" />}
                caption="Сервис для получения подробной информации об активности эксперта"
                actions={
                    <div>
                        <Link href="https://vk.me/diexp" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                        <Link href="https://vk.com/diexp" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                InfoExperts
            </RichCell>
            </Link>
            <Separator />
            <Link href="https://vk.com/vkexperts_logs" target="_blank">
            <RichCell
                disabled
                before={<Avatar style={{objectFit: 'cover'}} size={72} src="https://sun9-5.userapi.com/impg/HpKOupV1MfyVjRpxu1Wd4xA_zssRjYn2JtHjSg/ZMIZj5ECoAc.jpg?size=1204x1200&quality=96&sign=e5afcee82ec0ebcad2f3a1acc0f215a3&type=album" />}
                caption="Проект, для отслеживания новых экспертов"
                actions={
                    <div>
                        <Link href="https://vk.me/vkexperts_logs" target="_blank"><Button style={{ marginRight: 10 }}>Написать</Button></Link>
                        <Link href="https://vk.com/vkexperts_logs" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                Monitoring
            </RichCell> 
            </Link>
            <Separator />
            <Link href="https://vk.com/ded_us" target="_blank">
            <RichCell
                disabled
                multiline
                before={<Avatar style={{objectFit: "cover"}} size={72} src="https://sun9-4.userapi.com/impf/w1t77VHh4LOH80wxX7EuVaVz0JBP4YbjBuQJVA/B7IHoH4ssrg.jpg?size=384x384&quality=96&sign=d01373302bb59a07a2ee037305097daa&type=album" />}
                caption="Поставщик идей"
                actions={
                    <div>
                    <Link href="https://vk.com/ded_us" target="_blank"><Button mode="secondary">Перейти</Button></Link>
                    </div>
                }
            >
                Михаил Измайлов
            </RichCell>
            </Link>
            </Group>
            <Footer onClick={this.openBaseWithAction}>Версия: 2.1.1</Footer>
            {this.state.snackbar}
        </Panel>
        );
    }
}

InfoBase.propTypes = {
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string,
	}),
};

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout,
    goBack
};

export default connect(null, mapDispatchToProps)(InfoBase);