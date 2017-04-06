import * as React from 'react'
import {connect} from 'react-redux'
import activeComponent from 'react-router-active-component'
let LinkNav = activeComponent('div', {link: true})

interface OwnProps {}
interface ConnectedState {}
interface ConnectedDispatch {}
interface OwnState {}

const mapStateToProps = null
const mapDispatchToProps = null

class FooterComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  render () {
    let listProps: any = Object.assign({}, this.props)

    delete listProps.nestedLevel
    delete listProps.strings
    delete listProps.toastr
    delete listProps.dispatch
    delete listProps.locale
    delete listProps.params
    delete listProps.location
    delete listProps.routes

    return <LinkNav {...listProps} />
  }
}
export const Footer: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(FooterComponent)
