
import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chart from '../components/Chart';
import Deposit from '../components/Deposit';
import Copyright from '../components/Copyright';
import actions from '../../actions';

const styles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    appBarSpacer: theme.mixins.toolbar,
}));


const mapStateToProps = (state) => {
    return {
        chart: state.chart
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        setChart: id => dispatch(actions.chart.get(id)),
    }
};

const Main = ({ chart, setChart }) => {
    const classes = styles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                    <Button color="primary" onClick={() => setChart('daily')}>Daily</Button>
                    <Button color="primary" onClick={() => setChart('monthly')}>Monthly</Button>
                        <Paper className={fixedHeightPaper}>
                        <Chart data={chart.selected.data} />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={8} lg={3}>
                        <Paper className={fixedHeightPaper}>
                        <Deposit />
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);