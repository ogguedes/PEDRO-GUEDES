
import { Plan, Testimonial, Notification } from './types.ts';

export const PLANS: Plan[] = [
  {
    id: 'start',
    name: 'Acesso Semanal',
    price: 'R$ 1,90',
    period: '7 Dias de Acesso',
    features: [
      'Qualidade HD (1080p)',
      '1 Tela por vez',
      'Acesso Mobile e Tablet',
      'Catálogo Completo',
      'Sem Anúncios',
      'Suporte via E-mail'
    ],
    buttonText: 'TESTAR POR 7 DIAS',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=AtIFXF',
    badge: 'PLANO TESTE'
  },
  {
    id: 'maratona-pro',
    name: 'Membro Vitalício',
    oldPrice: 'R$ 97,00',
    price: 'R$ 4,90',
    period: 'ÚNICA VEZ - SEM MENSALIDADES',
    features: [
      'ACESSO PARA SEMPRE',
      'QUALIDADE ULTRA 4K HDR',
      'TELAS ILIMITADAS ♾️',
      'SMART TV, TV BOX E CONSOLES',
      'DOWNLOADS LIBERADOS',
      'SUPORTE VIP 24H'
    ],
    buttonText: 'SER VITALÍCIO AGORA',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=2GsD73',
    popular: true,
    badge: 'RECOMENDADO'
  },
  {
    id: 'revendedor-pro',
    name: 'Família + Business',
    oldPrice: 'R$ 297,00',
    price: 'R$ 14,90',
    period: 'PAGAMENTO ÚNICO VITALÍCIO',
    features: [
      'TUDO DO VITALÍCIO',
      'TELAS ILIMITADAS ♾️',
      'MÉTODO DE VENDAS PRO',
      'MATERIAL DE DIVULGAÇÃO',
      'CONFIGURAÇÃO NA SMART TV',
      'QUALIDADE CINEMA'
    ],
    buttonText: 'DESBLOQUEAR TUDO',
    checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=oNelfb',
    popular: false,
    badge: 'MASTER'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo F.',
    role: 'Membro Vitalício',
    text: '"Inacreditável pagar esse valor por um acesso tão completo. O suporte me ajudou a instalar na TV em 5 minutos e a qualidade é perfeita!"',
    stars: 5
  },
  {
    id: 2,
    name: 'Marina G.',
    role: 'Assinante 4K',
    text: '"Paguei os 4,90 meio desconfiada, mas em segundos recebi tudo. Já maratonei 3 séries essa semana com imagem perfeita."',
    stars: 5
  }
];

export const NOTIFICATION_MESSAGES: Notification[] = [
  { id: 1, name: 'João P.', product: 'Plano Vitalício 4K', location: 'Belo Horizonte, MG', time: 'agora mesmo' },
  { id: 2, name: 'Maria S.', product: 'Plano Vitalício 4K', location: 'São Paulo, SP', time: 'há 1 min' },
  { id: 3, name: 'Ana C.', product: 'Upgrade Revendedor', location: 'Salvador, BA', time: 'há 3 min' },
  { id: 4, name: 'Pedro L.', product: 'Plano Vitalício 4K', location: 'Brasília, DF', time: 'há 5 min' },
  { id: 5, name: 'Fernanda M.', product: 'Plano Vitalício 4K', location: 'Rio de Janeiro, RJ', time: 'há 8 min' }
];
