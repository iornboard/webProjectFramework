import React, {Component, components} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX : 'auto'
  },
  table: {
    minWidth: 1080
  }
})


// https://placeimg.com/64/64/any >> 아무 이미지나 가져와서 쓸 수 있음
// 리엑트에는 key 값이 필요함, 그래서 아무 키가 될 수 있는 것을 사용할 것

class App extends Component {


  state = {
    customer : ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customer : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } =  this.props;

    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
              <TableCell> 사진 </TableCell>
              <TableCell> 이름  </TableCell>
              <TableCell> 생년월일  </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            
            {
              this.state.customer ? this.state.customer.map(c => {
                return(
                  <Customer
                    key = {c.id} 
                    id = {c.id}
                    image= {c.image}
                    name= {c.name}
                    birthday= {c.birthday}
                  />
                )
              })  
            : "" }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
