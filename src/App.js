import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout, InnerLayout } from './styles'
import { ComplexSearch, RandomSearch } from './components'
import { 
  HomePage, 
  AboutPage, 
  DetailsPage, 
  NotFound 
} from './pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <InnerLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/recipe/details/:id" component={DetailsPage} />
            <Route path="/complex-search/:ingredientList" component={ComplexSearch} />
            <Route path="/random-search/:tags" component={RandomSearch} />
            <Route path="*" component={NotFound} />
          </Switch>
        </InnerLayout>
      </MainLayout>
    </Router>
  );
}

export default App;
