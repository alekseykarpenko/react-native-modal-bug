import React, { PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableNativeFeedback,
    Modal,
    ActivityIndicator
} from 'react-native';

export default class BugPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data1: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            data6: '',
            data7: '',
            data8: '',
            data9: '',
            data10: '',

            loaded: false,

            loading: false,
        }
    }

    componentDidMount() {
        this.fetchData();

        if (!__DEV__) setTimeout(()=>{
            alert("Application is not freezed!");
        },3000);
    }

    fetchData() {
        this.setState({loading: true});

        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve();
            }, 1000);
        }).then(() => {
            this.setState({
                data1: "Real Data 1 ("+(Math.floor(Math.random()*899)+100)+")",
                data2: "Real Data 2 ("+(Math.floor(Math.random()*899)+100)+")",
                data3: "Real Data 3 ("+(Math.floor(Math.random()*899)+100)+")",
                data4: "Real Data 4 ("+(Math.floor(Math.random()*899)+100)+")",
                data5: "Real Data 5 ("+(Math.floor(Math.random()*899)+100)+")",
                data6: "Real Data 6 ("+(Math.floor(Math.random()*899)+100)+")",
                data7: "Real Data 7 ("+(Math.floor(Math.random()*899)+100)+")",
                data8: "Real Data 8 ("+(Math.floor(Math.random()*899)+100)+")",
                data9: "Real Data 9 ("+(Math.floor(Math.random()*899)+100)+")",
                data10: "Real Data 10 ("+(Math.floor(Math.random()*899)+100)+")",

                loaded: true,
            });

        })
            .done(()=>{
                this.setState({loading: false});
            });

    }

    refreshOnPress() {
        this.fetchData();
    }

    renderLoadingView() {
        return (
            <View style={{flex: 1,}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={styles.toolbar}>
                        <Text style={styles.toolbarTitle}>Loading data&hellip;</Text>
                    </View>
                    <Modal onRequestClose={() => {this.state.loading = false}} visible={this.state.loading} transparent>
                        <View style={styles.loaderContainer}>
                            <View style={styles.loaderBackground}>
                                <ActivityIndicator
                                    size='large'
                                    style={{ flex: 1 }}
                                    color="#E37222"
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return(
            <View style={{flex: 1,}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={styles.toolbar}>
                        <Text style={styles.toolbarTitle}>Real Data</Text>
                        <TouchableNativeFeedback onPress={() => this.refreshOnPress()}>
                            <Text style={styles.toolbarRefresh}>
                                (refresh)
                            </Text>
                        </TouchableNativeFeedback>
                    </View>
                    <ScrollView>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentHeader}>DATA GROUP 1</Text>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 1:</Text>
                                <Text style={styles.contentText}>{this.state.data1}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 2:</Text>
                                <Text style={styles.contentText}>{this.state.data2}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 3:</Text>
                                <Text style={styles.contentText}>{this.state.data3}</Text>
                            </View>
                        </View>
                        <View style={styles.dividerGroup}/>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentHeader}>DATA GROUP 2</Text>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 4:</Text>
                                <Text style={styles.contentText}>{this.state.data4}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Titile 5:</Text>
                                <Text style={styles.contentText}>{this.state.data5}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 6:</Text>
                                <Text style={styles.contentText}>{this.state.data6}</Text>
                            </View>
                        </View>
                        <View style={styles.dividerGroup}/>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentHeader}>DATA GROUP 3</Text>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 7:</Text>
                                <Text style={styles.contentText}>{this.state.data7}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 8:</Text>
                                <Text style={styles.contentText}>{this.state.data8}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Title 9:</Text>
                                <Text style={styles.contentText}>{this.state.data9}</Text>
                                <View style={styles.divider}/>
                            </View>
                            <View>
                                <Text style={styles.contentTitle}>Data Titile 10:</Text>
                                <Text style={styles.contentText}>{this.state.data10}</Text>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Modal onRequestClose={() => {this.state.loading = false}} visible={this.state.loading} transparent>
                    <View style={styles.loaderContainer}>
                        <View style={styles.loaderBackground}>
                            <ActivityIndicator
                                size='large'
                                style={{ flex: 1 }}
                                color="#E37222"
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    loaderBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.15)'
    },
    divider: {
        height: 1,
        backgroundColor: '#EFEFEF'
    },
    dividerGroup: {
        height: 1,
        backgroundColor: '#F7F7F7'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    contentContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 10,
    },
    contentHeader: {
        fontSize: 16,
        lineHeight: 20,
        color: '#E37222',
        marginTop: 21,
        marginBottom: 15,
    },
    contentTitle: {
        fontSize: 16,
        lineHeight: 22,
        color: '#66B9BF',
        marginTop: 4,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 22,
        color: '#CCCCCC',
        marginBottom: 3,
    },

    toolbar: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#07889B'
    },
    toolbarTitle: {
        flex: 1,
        fontSize: 20,
        marginLeft: 16,
        color: '#FFFFFF'
    },
    toolbarRefresh: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FFFFFF',
        padding: 10
    },
});

AppRegistry.registerComponent('ModalBug', () => BugPage);
