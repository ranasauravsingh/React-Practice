import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { Checkbox, Form, Input } from "antd";
import { Space, Table, Tag } from "antd";
import { insert, view, deleteD } from "../services/FetchService";
import { ToastContainer, toast } from "react-toastify";

const FormDemo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	let [formData, setFormData] = useState([]);
	const [form] = Form.useForm();

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		form.resetFields();
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	const displayData = () => {
		view("antdata").then((res) => {
			let output = res;
			setFormData(output);
			// setFormData(res);
		});
	};

	useEffect(() => {
		displayData();
	}, []);

	const onFinish = (values) => {
		console.log("Success:", values);

		insert(values, "antdata").then((res) => {
			if (res === "") {
				toast.error("Error occur while inserting data", {
					theme: "colored",
					autoClose: 2000,
				});
			} else {
				displayData();
				setIsModalOpen(false);
				form.resetFields();
				toast.success("Data inserted successfully", {
					theme: "colored",
					autoClose: 2000,
				});
			}
		});
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const columns = [
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "Number",
			dataIndex: "number",
			key: "number",
		},
		{
			title: "Mail",
			dataIndex: "mail",
			key: "mail",
		},
		{
			title: "Message",
			dataIndex: "message",
			key: "message",
		},
		{
			title: "Password",
			dataIndex: "password",
			key: "password",
		},
		{
			title: "Remember Me",
			dataIndex: "remember",
			key: "remember",
		},
	];

	return (
		<>
			<div className="container d-flex justify-content-center">
				<ToastContainer />

				<Button type="primary" onClick={showModal}>
					Open Modal
				</Button>
				<Modal
					title="Contact Modal"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<Form
						form={form}
						name="basic"
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							label="Number"
							name="number"
							type="number"
							rules={[
								{
									required: true,
									message: "Please input your number!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Mail"
							name="mail"
							rules={[
								{
									required: true,
									message: "Please input your mail!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item label="Message" name="message">
							<Input />
						</Form.Item>

						<Form.Item
							name="remember"
							valuePropName="checked"
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<Form.Item
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</div>
			<div className="container d-flex justify-content-center">
				<Table dataSource={formData} columns={columns} rowKey="id" />
			</div>
		</>
	);
};

export default FormDemo;
