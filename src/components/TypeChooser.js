import {h, Component} from 'preact'

export default class TypeChooser extends Component {
    handleClick = evt => {
        evt.preventDefault()

        let {value} = evt.currentTarget.parentNode.dataset
        let {onChange = () => {}} = this.props

        if (this.props.value !== value) onChange({value})
    }

    render() {
        return <section id="type-chooser">
            <ul>
                <li
                    data-value="simplified"
                    class={this.props.value === 'simplified' ? 'current' : ''}
                >
                    <a href="#" onClick={this.handleClick}>Simplified</a>
                </li>
                <li
                    data-value="traditional"
                    class={this.props.value === 'traditional' ? 'current' : ''}
                >
                    <a href="#" onClick={this.handleClick}>Traditional</a>
                </li>
            </ul>
        </section>
    }
}
