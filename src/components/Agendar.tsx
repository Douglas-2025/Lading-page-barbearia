import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Calendar, Clock, User, Phone, Scissors } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

interface FormData {
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  hora: string;
  observacao: string;
}

export const Agendar: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    hora: '',
    observacao: ''
  });

  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState<{ texto: string; tipo: string }>({ texto: '', tipo: '' });
  const [isLoading, setIsLoading] = useState(false);

  const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const servicos = [
    { value: 'corte', label: 'Corte de Cabelo' },
    { value: 'barba', label: 'Barba' },
    { value: 'completo', label: 'Corte + Barba' },
    { value: 'coloracao', label: 'Coloração' },
    { value: 'outro', label: 'Outro serviço' }
  ];

  useEffect(() => {
    if (formData.data) fetchAgendamentos();
    const intervalId = setInterval(() => {
      fetchAgendamentos();
    }, 6 * 60 * 60 * 1000); // 6 horas
    return () => clearInterval(intervalId);
  }, [formData.data]);

  const fetchAgendamentos = async () => {
    if (!formData.data) return;
    try {
      const { data, error } = await supabase
        .from('agendamentos')
        .select('*')
        .eq('data', formData.data);

      if (error) throw error;
      setAgendamentos(data || []);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
      setMensagem({ texto: 'Erro ao verificar disponibilidade.', tipo: 'erro' });
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao verificar disponibilidade."
      });
    }
  };

  const verificarDisponibilidade = (hora: string) => {
    return !agendamentos.some(a => a.hora === hora);
  };

  // ✅ Corrigido: Evita erro de fuso horário
  const formatarData = (dataString: string) => {
    const [ano, mes, dia] = dataString.split('-').map(Number);
    const dataLocal = new Date(ano, mes - 1, dia); // mês começa em 0
    return dataLocal.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const enviarWhatsApp = () => {
    const mensagemTexto = `*NOVO AGENDAMENTO* 

*Cliente:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Serviço:* ${servicos.find(s => s.value === formData.servico)?.label || formData.servico}
*Data:* ${formatarData(formData.data)}
*Horário:* ${formData.hora}
*Observações:* ${formData.observacao || 'Nenhuma'}

_Agendado via sistema_`;

    const numeroWhatsApp = '5568992375187';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemTexto)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.nome || !formData.telefone || !formData.servico || !formData.data || !formData.hora) {
        throw new Error('Preencha todos os campos obrigatórios.');
      }

      if (!verificarDisponibilidade(formData.hora)) {
        throw new Error('Este horário já foi reservado. Por favor, escolha outro.');
      }

      const { error } = await supabase.from('agendamentos').insert([{ ...formData, status: 'pendente' }]);

      if (error) throw error;

      fetchAgendamentos();

      setMensagem({ texto: 'Agendamento confirmado! Redirecionando para WhatsApp...', tipo: 'sucesso' });
      toast({
        title: "Sucesso!",
        description: "Agendamento confirmado! Redirecionando para WhatsApp...",
      });
      enviarWhatsApp();

      setFormData({
        nome: '',
        telefone: '',
        servico: '',
        data: '',
        hora: '',
        observacao: ''
      });
    } catch (error) {
      const mensagemErro = error instanceof Error ? error.message : 'Erro inesperado.';
      setMensagem({ texto: mensagemErro, tipo: 'erro' });
      toast({
        variant: "destructive",
        title: "Erro",
        description: mensagemErro,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 text-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Agendamento <span className="text-[#00ff6a]">On-line</span>
          </h2>
        
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <InputWithIcon icon={<User />} name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required />
              <InputWithIcon icon={<Phone />} name="telefone" value={formData.telefone} onChange={handleChange} placeholder="WhatsApp (com DDD)" required />
              <SelectWithIcon
                icon={<Scissors />}
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
                options={[{ value: '', label: 'Selecione um serviço' }, ...servicos]}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputWithIcon
                  icon={<Calendar />}
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {horarios.map(hora => (
                  <button
                    key={hora}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, hora }))}
                    disabled={!verificarDisponibilidade(hora)}
                    className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-all ${
                      formData.hora === hora ? 'ring-2 ring-[#00ff6a]' : ''
                    } ${
                      verificarDisponibilidade(hora)
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-red-900 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    {hora} {!verificarDisponibilidade(hora) && '(Ocupado)'}
                  </button>
                ))}
              </div>

              <textarea
                name="observacao"
                placeholder="Alguma observação ou detalhe importante?"
                value={formData.observacao}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                isLoading ? 'bg-green-800 cursor-not-allowed' : 'bg-[#00ff6a] hover:bg-[#00dd5a] text-black'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Processando...
                </span>
              ) : (
                'Confirmar Agendamento'
              )}
            </button>

            {mensagem.texto && (
              <div className={`p-3 rounded-lg text-center ${
                mensagem.tipo === 'sucesso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {mensagem.texto}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const InputWithIcon = ({
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  min
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: string;
}) => (
  <div className="flex items-center space-x-3">
    <div className="text-gray-400">{icon}</div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  </div>
);

const SelectWithIcon = ({
  icon,
  name,
  value,
  onChange,
  required,
  options
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: Array<{ value: string, label: string }>;
}) => (
  <div className="flex items-center space-x-3">
    <div className="text-gray-400">{icon}</div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Agendar;
