import {RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type DrawerNavigatorPropsList = {
  NewsToday: undefined;
  AllNews: undefined;
  NewsDetails: {id: string};
};

export type DrawerNavigatorNavigationProps =
  DrawerNavigationProp<DrawerNavigatorPropsList>;
export type DrawerNavigatorRouteProps = RouteProp<DrawerNavigatorPropsList>;
