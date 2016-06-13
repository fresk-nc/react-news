import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import ArticlesPage from 'containers/ArticlesPage';
import ArticlePage from 'containers/ArticlePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ArticlesPage} />
        <Route path="/articles/:id" component={ArticlePage} />
    </Route>
);
