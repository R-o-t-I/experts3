import React from 'react';
import PropTypes from 'prop-types';
import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Tabs,
	TabsItem,
	HorizontalScroll,
	Spacing,
	Div,
	FormItem,
	NativeSelect,
	SimpleCell,
	Avatar,
	FixedLayout
} from '@vkontakte/vkui/';

class Rating extends React.Component {
    constructor (props) {
        super(props);

		this.state = {
			activeTab: "allTime"
		};
	}

	render () {
		const {
			id,
			go,
            fetchedUser
		} = this.props;

		return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="card" />}
				separator={false}
            >
                Рейтинг
            </PanelHeader>
            <Tabs>
                <HorizontalScroll>
					<TabsItem
						onClick={() => this.setState({ activeTab: 'allTime' })}
						selected={this.state.activeTab === 'allTime'}
					>
						За всё время
					</TabsItem>
					<TabsItem
						onClick={() => this.setState({ activeTab: 'recomendations' })}
						selected={this.state.activeTab === 'recomendations'}
					>
						За месяц
					</TabsItem>
					<TabsItem
						onClick={() => this.setState({ activeTab: 'friends' })}
						selected={this.state.activeTab === 'friends'}
					>
						За неделю
					</TabsItem>
					<TabsItem
						onClick={() => this.setState({ activeTab: 'photos' })}
						selected={this.state.activeTab === 'photos'}
					>
						За сегодня
					</TabsItem>
                </HorizontalScroll>
              </Tabs>
			  <Spacing separator size={8} />
			  <FormItem top="Тематика">
				  <NativeSelect>
					<option value="all" onClick={this.select} data-mode="art">Все тематики</option>
					<option value="art">Арт</option>
					<option value="Cinema">Кино</option>
					<option value="Games">Игры</option>
					<option value="Humor">Юмор</option>
					<option value="IT">IT</option>
					<option value="Music">Музыка</option>
					<option value="Photo">Фото</option>
					<option value="Science">Наука</option>
					<option value="Sport">Спорт</option>
					<option value="Style">Стиль</option>
					<option value="Tourism">Туризм</option>
				</NativeSelect>
			</FormItem>
			<Div>
				<table class="text">
				<tr>
					<td>Эксперты</td>
					<td class="rightcol">Записи</td>
				</tr>
			</table>
			</Div>
			{this.state.activeTab === "allTime" ?<div>
			{fetchedUser &&
				<SimpleCell
					before={<div style={{marginRight: 10, position: "relative"}}><Avatar size={48} src="" /><div className="position-rating">$n</div></div>}
					after={<div>$post</div>}
					description="$tematic">
						$Name
				</SimpleCell>
			}
			</div> :null}
			{this.state.activeTab === "month" ?<div>
			{fetchedUser &&
				<SimpleCell
					before={<Avatar size={48} src="" />}
					after={<div>$post</div>}
					description="$tematic">
						$Name
				</SimpleCell>
			}
			</div> :null}
			{this.state.activeTab === "week" ?<div>
			{fetchedUser &&
				<SimpleCell
					before={<Avatar size={48} src="" />}
					after={<div>$post</div>}
					description="$tematic">
						$Name
				</SimpleCell>
			}
			</div> :null}
			{this.state.activeTab === "today" ?<div>
			{fetchedUser &&
				<SimpleCell
					before={<Avatar size={48} src="" />}
					after={<div>$post</div>}
					description="$tematic">
						$Name
				</SimpleCell>
			}
			</div> :null}
			{fetchedUser &&
			<FixedLayout filled vertical="bottom">
				<SimpleCell
					before={<div style={{marginRight: 10, position: "relative"}}><Avatar size={48} src={fetchedUser.photo_200} /><div className="position-rating">$n</div></div>}
					after={<div>$post</div>}
					description="$tematic">
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</SimpleCell>
			</FixedLayout>
			}
		</Panel>
		);
	}
}

Rating.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Rating;