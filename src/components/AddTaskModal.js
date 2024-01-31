import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, InputNumber, DatePicker } from 'antd';
import dayjs from 'dayjs';

const AddTaskModal = ({ isModalVisible, handleFormSubmit, handleModalClose, editingTask }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (editingTask) {
            form.setFieldsValue({
                title: editingTask.title.split(" - ").pop(),
                duration: editingTask.duration,
                deadline: dayjs(editingTask.deadline, 'YYYY-MM-DD HH:mm'),
                hotelApartment: editingTask.hotelApartment,
            });
        } else {
            form.resetFields();
        }
    }, [editingTask, form, isModalVisible]);

    return (
        <>
            <Modal
                title={editingTask ? "Edit Task" : "Add New Task"}
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
            >
                <Form
                    key={editingTask ? editingTask.id : 'newTask'}
                    form={form}
                    onFinish={handleFormSubmit}
                >
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'Please input the task title!' }]}
                    >
                        <Input placeholder="Task Title" />
                    </Form.Item>
                    <Form.Item
                        name="duration"
                        rules={[{ required: true, message: 'Please input the duration!' }]}
                    >
                        <InputNumber min={1} placeholder="Duration in minutes" style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="deadline"
                        rules={[{ required: true, message: 'Please select the deadline!' }]}
                    >
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm"
                            placeholder="Select deadline"
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="hotelApartment"
                        rules={[{ required: true, message: 'Please input the task hotel apartment!' }]}
                    >
                        <Input placeholder="Hotel Apartment" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {editingTask ? "Edit Task" : "Add New Task"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    );
};

export default AddTaskModal;
