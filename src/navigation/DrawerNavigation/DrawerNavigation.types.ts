import {RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type DrawerNavigatorPropsList = {
  NewsToday: undefined;
  AllNews: {id: string};
  LebanonNews: undefined;
  NewsDetails: undefined;
};

export type DrawerNavigatorNavigationProps =
  DrawerNavigationProp<DrawerNavigatorPropsList>;
export type DrawerNavigatorRouteProps = RouteProp<DrawerNavigatorPropsList>;
