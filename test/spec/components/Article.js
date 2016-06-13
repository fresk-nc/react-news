import Article from 'components/Article';
import { shallow } from 'enzyme';

function setup(props) {
    const component = shallow(
        <Article {...props} />
    );

    return {
        component,
        type: component.find('span'),
        title: component.find('h1'),
        content: component.find('p')
    };
}

function mockArticle(overrides) {
    return Object.assign({}, {
        title: 'title',
        content: 'content',
        type: 'type'
    }, overrides);
}

describe('components', () => {
    describe('Article', () => {
        it('should render the type of an article', () => {
            const article = mockArticle();
            const { type } = setup(article);

            expect(type.text()).to.be.equal(article.type);
        });

        it('should render the title of an article', () => {
            const article = mockArticle();
            const { title } = setup(article);

            expect(title.text()).to.be.equal(article.title);
        });

        it('should render the content of an article', () => {
            const article = mockArticle();
            const { content } = setup(article);

            expect(content.text()).to.be.equal(article.content);
        });
    });
});
