import React from 'react';
import CastHarrow from './CastHarrow';

class Harrowing extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isSubmitted: false,
			drawSize: 9,
			showLesserHarrow: false,
			showHarrow: false,
			showGreaterHarrow: false,
		};
		this.characterAlignment = React.createRef();
		this.neutralOpposition = React.createRef();
		this.harrowSpell = React.createRef();
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		this.setState({isSubmitted: true}); // Let's set the new 'submitted state to TRUE
		this.setState({
			showLesserHarrow: false, 
			showHarrow: false,
			showGreaterHarrow: false,
			drawSize: 9
		});
		switch(this.harrowSpell.current.value){
			default:
				break;
			case 'LesserHarrowing':
				this.setState({showLesserHarrow: true, drawSize: 4});
				break;
			case 'Harrowing':
				this.setState({showHarrow: true});
				break;
			case 'GreaterHarrowing':
				this.setState({showGreaterHarrow: true});
				break;
		}
		e.preventDefault();  // Here we prevent the default browser behavior
	}

	render(){
		const lesserHarrowStyle = !this.state.showLesserHarrow ? {display: 'none'} : {};
		const harrowStyle = !this.state.showHarrow ? {display: 'none'} : {};
		const greaterHarrowStyle = !this.state.showGreaterHarrow ? {display: 'none'} : {};
		return (
			<section>
			<div>
				<form onSubmit={this.onSubmit}>
						<div>
							<label>
								Harrow Spell to Cast:
								<select name="harrowSpell" defaultValue='Harrowing' ref={this.harrowSpell}>
									<option value="LesserHarrowing">Lesser Harrowing</option>
									<option value="Harrowing">Harrowing</option>
									<option value="GreaterHarrowing">Greater Harrowing</option>
								</select>
							</label>
						</div>
						<div>
							<label>
								Character Alignment:
								<select name="characterAlignment" defaultValue='LG' ref={this.characterAlignment}>
									<option value="LG">Lawful Good</option>
									<option value="NG">Neutral Good</option>
									<option value="CG">Chaotic Good</option>
									<option value="LN">Lawful Neutral</option>
									<option value="N">Neutral</option>
									<option value="CN">Chaotic Neutral</option>
									<option value="LE">Lawful Evil</option>
									<option value="NE">Neutral Evil</option>
									<option value="CE">Chaotic Evil</option>
								</select>
							</label>
						</div>
						<div>
							<label>
								Neutral Opposition:
								<select name="neutralOpposition" value={Harrowing.neutralOpposition} ref={this.neutralOpposition}>
									<option value="LG">Lawful Good</option>
									<option value="CG">Chaotic Good</option>
									<option value="LE">Lawful Evil</option>
									<option value="CE">Chaotic Evil</option>
								</select>
							</label>
						</div>
						<div><input type="submit" value="Submit" /></div>
					</form>
					{this.state.isSubmitted && 
						<CastHarrow 
						character={this.characterAlignment.current.value}
						opposition={this.neutralOpposition.current.value} 
						cardsToDraw={this.state.drawSize}/>
					}
				</div>
				
				<div style={lesserHarrowStyle}>
					<h1 className={'title'}>Lesser Harrowing</h1>
					<div className={'spellBlock'}>
						<span><b>Source</b> HomeBrew</span><br/>
						<span><b>School</b> divination</span>
						<h3 className={'framing'}>Casting</h3>
						<span><b>Casting Time</b> 10 minutes</span><br/>
						<span><b>Components</b> V, S, F (a Harrow deck)</span>
						<h3 className={'framing'}>Effect</h3>
						<span><b>Range</b> touch</span><br/>
						<span><b>Target</b> one creature</span><br/>
						<span><b>Duration</b> 30 minutes/level or until fulfilled</span>
						<h3 className={'framing'}>Description</h3>
						<span>
							You use a Harrow deck to tell a fortune for yourself or someone else. If you cast harrowing on another creature, you must remain adjacent to the target for the duration of the casting time. A harrowing must describe one set of events or course of action (for example, “hunting down the pirate king,” or “traveling to Viperwall to search for a magic sword”) that the target of the spell intends to undertake at some point during the spell’s duration.
							<br/><br/>
							You draw four cards when this spell is cast.  Record the ability score and alignment associated with each card. Each of these cards grants a luck bonus or a penalty on a specific type of d20 check; the magnitude of the penalty or bonus depends upon how closely that particular card’s alignment matches the target creature’s alignment. If the card and target’s alignments are identical, that card provides a +2 luck bonus on the associated suit’s check. If the card and target’s alignments are of the opposite alignment (see below), the card inflicts a –1 penalty on that associated check. If the card has any other alignment, it provides a +1 luck bonus on the associated suit’s check.
							<br/><br/>
							While penalties persist on all associated checks for as long as the harrowing persists, the bonuses are one-use bonuses that the harrowed character can “spend” at any time to modify that card’s associated check. You can spend a bonus to modify an appropriate roll after the die is rolled, but cannot spend the bonus once you know the result of the roll. Since all of the bonuses granted by a harrowing are luck bonuses, they do not stack with each other. Penalties, on the other hand, do stack. Once you spend all of the bonuses granted by a harrowing, or once the spell’s duration ends, the spell ends and the penalties are removed.
							<br/><br/>
							A single creature can only be under the effects of one harrowing at a time. If it is subjected to a second harrowing while a previous harrowing is still in effect, the new harrowing automatically fails.
						</span>
					</div>
				</div>
				<div style={harrowStyle}>
					<h1 className={'title'}>Harrowing</h1>
					<div className={'spellBlock'}>
						<span><b>Source</b> HomeBrew</span><br/>
						<span><b>School</b> divination</span>
						<h3 className={'framing'}>Casting</h3>
						<span><b>Casting Time</b> 10 minutes</span><br/>
						<span><b>Components</b> V, S, F (a Harrow deck)</span>
						<h3 className={'framing'}>Effect</h3>
						<span><b>Range</b> touch</span><br/>
						<span><b>Target</b> one creature</span><br/>
						<span><b>Duration</b> 30 minutes/level or until fulfilled</span>
						<h3 className={'framing'}>Description</h3>
						<span>
							You use a Harrow deck to tell a fortune for yourself or someone else. If you cast harrowing on another creature, you must remain adjacent to the target for the duration of the casting time. A harrowing must describe one set of events or course of action (for example, “hunting down the pirate king,” or “traveling to Viperwall to search for a magic sword”) that the target of the spell intends to undertake at some point during the spell’s duration.
							<br/><br/>
							You draw four cards when this spell is cast.  Record the ability score and alignment associated with each card. Each of these cards grants a luck bonus or a penalty on a specific type of d20 check; the magnitude of the penalty or bonus depends upon how closely that particular card’s alignment matches the target creature’s alignment. If the card and target’s alignments are identical, that card provides a +2 luck bonus on the associated suit’s check. If the card and target’s alignments are of the opposite alignment (see below), the card inflicts a –1 penalty on that associated check. If the card has any other alignment, it provides a +1 luck bonus on the associated suit’s check.
							<br/><br/>
							While penalties persist on all associated checks for as long as the harrowing persists, the bonuses are one-use bonuses that the harrowed character can “spend” at any time to modify that card’s associated check. You can spend a bonus to modify an appropriate roll after the die is rolled, but cannot spend the bonus once you know the result of the roll. Since all of the bonuses granted by a harrowing are luck bonuses, they do not stack with each other. Penalties, on the other hand, do stack. Once you spend all of the bonuses granted by a harrowing, or once the spell’s duration ends, the spell ends and the penalties are removed.
							<br/><br/>
							A single creature can only be under the effects of one harrowing at a time. If it is subjected to a second harrowing while a previous harrowing is still in effect, the new harrowing automatically fails.
						</span>
					</div>
				</div>
				<div style={greaterHarrowStyle}>
					<h1 className={'title'}>Greater Harrowing</h1>
					<div className={'spellBlock'}>
						<span><b>Source</b> HomeBrew</span><br/>
						<span><b>School</b> divination</span>
						<h3 className={'framing'}>Casting</h3>
						<span><b>Casting Time</b> 10 minutes</span><br/>
						<span><b>Components</b> V, S, F (a Harrow deck)</span>
						<h3 className={'framing'}>Effect</h3>
						<span><b>Range</b> touch</span><br/>
						<span><b>Target</b> one creature</span><br/>
						<span><b>Duration</b> 30 minutes/level or until fulfilled</span>
						<h3 className={'framing'}>Description</h3>
						<span>
							You use a Harrow deck to tell a fortune for yourself or someone else. If you cast harrowing on another creature, you must remain adjacent to the target for the duration of the casting time. A harrowing must describe one set of events or course of action (for example, “hunting down the pirate king,” or “traveling to Viperwall to search for a magic sword”) that the target of the spell intends to undertake at some point during the spell’s duration.
							<br/><br/>
							You draw four cards when this spell is cast.  Record the ability score and alignment associated with each card. Each of these cards grants a luck bonus or a penalty on a specific type of d20 check; the magnitude of the penalty or bonus depends upon how closely that particular card’s alignment matches the target creature’s alignment. If the card and target’s alignments are identical, that card provides a +2 luck bonus on the associated suit’s check. If the card and target’s alignments are of the opposite alignment (see below), the card inflicts a –1 penalty on that associated check. If the card has any other alignment, it provides a +1 luck bonus on the associated suit’s check.
							<br/><br/>
							While penalties persist on all associated checks for as long as the harrowing persists, the bonuses are one-use bonuses that the harrowed character can “spend” at any time to modify that card’s associated check. You can spend a bonus to modify an appropriate roll after the die is rolled, but cannot spend the bonus once you know the result of the roll. Since all of the bonuses granted by a harrowing are luck bonuses, they do not stack with each other. Penalties, on the other hand, do stack. Once you spend all of the bonuses granted by a harrowing, or once the spell’s duration ends, the spell ends and the penalties are removed.
							<br/><br/>
							A single creature can only be under the effects of one harrowing at a time. If it is subjected to a second harrowing while a previous harrowing is still in effect, the new harrowing automatically fails.
						</span>
					</div>
				</div>
			</section>
		);
	}
}

export default Harrowing;