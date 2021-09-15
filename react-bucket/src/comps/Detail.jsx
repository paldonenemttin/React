import React from "react";
import "../css/main"

function Detail() {
	return (
		<div>
			<div>
				<input placeholder="버킷 내용 추가"></input>
			</div>
			<table class="bucket_list">
				<thead>
					<tr>
						<th>FLAG</th>
						<th>날짜</th>
						<th>bucket</th>
						<th>완료</th>
						<th>취소</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<th>2021-09-13</th>
						<th>리액트 어려워</th>
						<th></th>
						<th><input /></th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Detail